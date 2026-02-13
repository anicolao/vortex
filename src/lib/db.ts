import { db } from './firebase';
import { collection, addDoc, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";

const EVENTS_COLLECTION = "events";

export interface AppEvent {
    type: string;
    payload: any;
    timestamp: Timestamp; // Firestore Timestamp
    id?: string;
}

export async function logEvent(type: string, payload: any) {
    if (!db) {
        console.warn("Firestore not initialized, skipping logEvent");
        return;
    }
    try {
        const docRef = await addDoc(collection(db, EVENTS_COLLECTION), {
            type,
            payload,
            timestamp: Timestamp.now()
        });
        console.log("Event written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
}

// Real-time subscription
export function subscribeToEvents(callback: (events: AppEvent[]) => void) {
    if (!db) {
        console.warn("Firestore not initialized, skipping subscription");
        return () => { };
    }

    const q = query(collection(db, EVENTS_COLLECTION), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const events: AppEvent[] = [];
        querySnapshot.forEach((doc) => {
            events.push({ id: doc.id, ...doc.data() } as AppEvent);
        });
        callback(events);
    }, (error) => {
        console.error("Error subscribing to events: ", error);
    });

    return unsubscribe;
}
