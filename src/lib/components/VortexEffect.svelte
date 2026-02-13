<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let animationId: number;

  interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: { x: number; y: number };
    angle: number;
    distance: number;
  }

  let particles: Particle[] = [];
  const particleCount = 200;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    });

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * (Math.min(width, height) / 2);
        particles.push({
          x: width / 2 + Math.cos(angle) * distance,
          y: height / 2 + Math.sin(angle) * distance,
          radius: Math.random() * 2 + 1,
          color: `rgba(${130 + Math.random() * 50}, 50, ${200 + Math.random() * 55}, ${Math.random() * 0.5 + 0.5})`,
          velocity: { x: 0, y: 0 },
          angle,
          distance
        });
      }
    }

    function animate() {
      if (!ctx) return;
      
      // TEST MODE: Deterministic Rendering
      if (import.meta.env.VITE_TEST_MODE === 'true') {
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, width, height);
          
          // Draw a single static circle to represent the vortex
          ctx.beginPath();
          ctx.arc(width / 2, height / 2, 50, 0, Math.PI * 2);
          ctx.fillStyle = '#663399'; // RebeccaPurple
          ctx.fill();
          return; // Stop animation loop
      }

      animationId = requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; // Trail effect
      ctx.fillRect(0, 0, width, height);

      particles.forEach(particle => {
        // Vortex motion
        particle.angle += 0.02 * (200 / (particle.distance + 50)); 
        
        let targetX = width / 2 + Math.cos(particle.angle) * particle.distance;
        let targetY = height / 2 + Math.sin(particle.angle) * particle.distance;
        
        particle.x += (targetX - particle.x) * 0.1;
        particle.y += (targetY - particle.y) * 0.1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    }

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', () => {});
    };
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Behind content */
    pointer-events: none;
  }
</style>
