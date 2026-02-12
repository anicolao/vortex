<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { ChevronRight } from 'lucide-svelte';

  const dispatch = createEventDispatcher();

  let slider: HTMLDivElement;
  let thumb: HTMLDivElement;
  let dragging = false;
  let startX = 0;
  let currentX = 0;
  let completed = false;

  function handleStart(e: MouseEvent | TouchEvent) {
    if (completed) return;
    dragging = true;
    startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
  }

  function handleMove(e: MouseEvent | TouchEvent) {
    if (!dragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const max = slider.clientWidth - thumb.clientWidth;
    const diff = clientX - startX;
    
    currentX = Math.max(0, Math.min(max, diff));
    
    // Haptic feedback at limits? (Requires native wrapper usually)
    // if (navigator.vibrate && currentX === max) navigator.vibrate(10);
  }

  function handleEnd() {
    dragging = false;
    const max = slider.clientWidth - thumb.clientWidth;
    
    if (currentX > max * 0.9) {
      currentX = max;
      completed = true;
      dispatch('complete');
      if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate([10, 50, 10]);
    } else {
      currentX = 0; // Snap back
    }

    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleEnd);
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('touchend', handleEnd);
  }
</script>

<div class="slider-container" bind:this={slider} class:completed>
  <div class="track-text">{completed ? 'Payment Sent!' : 'Slide to Pay'}</div>
  <div 
    class="thumb" 
    bind:this={thumb}
    style="transform: translateX({currentX}px)"
    on:mousedown={handleStart}
    on:touchstart={handleStart}
    role="slider"
    aria-label="Slide to confirm payment"
    aria-valuenow={currentX}
    tabindex="0"
  >
    <ChevronRight color={completed ? "#10b981" : "#a855f7"} />
  </div>
  <div class="trail" style="width: {currentX + 25}px; opacity: {currentX ? 1 : 0}"></div>
</div>

<style>
  .slider-container {
    position: relative;
    height: 3.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    overflow: hidden;
    user-select: none;
    transition: border-color 0.3s;
  }

  .slider-container.completed {
    border-color: var(--color-success);
    background: rgba(16, 185, 129, 0.1);
  }

  .track-text {
    position: absolute;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .slider-container.completed .track-text {
    color: var(--color-success);
  }

  .thumb {
    width: 3rem;
    height: 3rem;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.25rem;
    cursor: grab;
    z-index: 10;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }

  .trail {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--color-primary-glow));
    pointer-events: none;
  }
  
  .completed .trail {
    background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5));
    width: 100% !important;
  }
</style>
