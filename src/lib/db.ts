import { db } from './firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

const EVENTS_COLLECTION = "events";

export interface AppEvent {
    type: string;
    payload: any;
    timestamp: Timestamp;
}

export async function logEvent(type: string, payload: any) {
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

export async function getAllEvents() {
    const q = query(collection(db, EVENTS_COLLECTION), orderBy("timestamp"));
    const querySnapshot = await getDocs(q);
    const events: AppEvent[] = [];
    querySnapshot.forEach((doc) => {
        events.push(doc.data() as AppEvent);
    });
    return events;
}
