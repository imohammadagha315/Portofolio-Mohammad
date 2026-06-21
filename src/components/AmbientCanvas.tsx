import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate responsive particles
    const particlesCount = Math.min(60, Math.floor((width * height) / 25000));
    const particles: Particle[] = [];

    const colors = [
      'rgba(0, 210, 255, ', // Cyan
      'rgba(237, 177, 255, ', // Violet
      'rgba(165, 231, 255, ', // Light Cyan
    ];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    // 3D Geometry Cage: Rotating Dodecahedron
    // Let's define the 20 vertices of a dodecahedron
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const a = 1;
    const b = 1 / phi;
    const c = 2 - phi;

    const rawVertices: Point3D[] = [
      { x: -a, y: -a, z: -a },
      { x: -a, y: -a, z: a },
      { x: -a, y: a, z: -a },
      { x: -a, y: a, z: a },
      { x: a, y: -a, z: -a },
      { x: a, y: -a, z: a },
      { x: a, y: a, z: -a },
      { x: a, y: a, z: a },

      { x: 0, y: -b, z: -phi },
      { x: 0, y: -b, z: phi },
      { x: 0, y: b, z: -phi },
      { x: 0, y: b, z: phi },

      { x: -b, y: -phi, z: 0 },
      { x: -b, y: phi, z: 0 },
      { x: -b, y: 0, z: -phi },
      { x: -b, y: 0, z: phi },

      { x: b, y: -phi, z: 0 },
      { x: b, y: phi, z: 0 },
      { x: b, y: 0, z: -phi },
      { x: b, y: 0, z: phi },
    ];

    // Connect vertices which have distance close to 1.15
    const edges: [number, number][] = [];
    const distSqThreshold = 1.15 * 1.15;
    for (let i = 0; i < rawVertices.length; i++) {
      for (let j = i + 1; j < rawVertices.length; j++) {
        const dx = rawVertices[i].x - rawVertices[j].x;
        const dy = rawVertices[i].y - rawVertices[j].y;
        const dz = rawVertices[i].z - rawVertices[j].z;
        const dSq = dx * dx + dy * dy + dz * dz;
        // Edge check (with margin of error)
        if (Math.abs(dSq - 1.35) < 0.1 || Math.abs(dSq - 4 * b * b) < 0.1) {
          edges.push([i, j]);
        }
      }
    }

    let angleX = 0.002;
    let angleY = 0.003;
    let angleZ = 0.001;

    // Projection size
    const baseScale = Math.min(width, height) * 0.22;
    let scale = baseScale;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      scale = Math.min(width, height) * 0.22;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize mouse in middle for start
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 2;
    mouseRef.current.targetX = width / 2;
    mouseRef.current.targetY = height / 2;

    const render = () => {
      // Clear with slight trailing opacity for a dynamic smooth vibe
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse tracking
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw active gradient backdrop behind cursor
      const radialGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 2.8
      );
      radialGradient.addColorStop(0, 'rgba(0, 210, 255, 0.04)');
      radialGradient.addColorStop(0.5, 'rgba(110, 32, 140, 0.03)');
      radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particle lines network
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Particle behavior near cursor
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x += (dxMouse / distMouse) * force * 1.5;
          p1.y += (dyMouse / distMouse) * force * 1.5;
        }

        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wall collisions
        if (p1.x < 0) {
          p1.x = width;
        } else if (p1.x > width) {
          p1.x = 0;
        }
        if (p1.y < 0) {
          p1.y = height;
        } else if (p1.y > height) {
          p1.y = 0;
        }

        // Render particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${p1.alpha})`;
        ctx.fill();

        // Check distance with others
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dxSq = (p1.x - p2.x) * (p1.x - p2.x);
          const dySq = (p1.y - p2.y) * (p1.y - p2.y);
          const distSq = dxSq + dySq;
          const limitSq = 140 * 140;

          if (distSq < limitSq) {
            const opacity = (1 - distSq / limitSq) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(165, 231, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw Rotating 3D wireframe cage layered on top of particles (offset right side slightly like a true centerpiece)
      const centerX = width * 0.72; // Position on the right side of screen
      const centerY = height * 0.45;

      // Skip 3D cage on mobile devices to preserve core layout performance and neatness
      if (width > 768) {
        // Slowly update angles
        angleX += 0.0015;
        angleY += 0.0025;
        angleZ += 0.001;

        // Perform rotation & caching
        const projectedPoints = rawVertices.map((v) => {
          // Rotate X
          let y = v.y * Math.cos(angleX) - v.z * Math.sin(angleX);
          let z = v.y * Math.sin(angleX) + v.z * Math.cos(angleX);
          let x = v.x;

          // Rotate Y
          let x2 = x * Math.cos(angleY) + z * Math.sin(angleY);
          let z2 = -x * Math.sin(angleY) + z * Math.cos(angleY);
          let y2 = y;

          // Rotate Z
          let x3 = x2 * Math.cos(angleZ) - y2 * Math.sin(angleZ);
          let y3 = x2 * Math.sin(angleZ) + y2 * Math.cos(angleZ);
          let z3 = z2;

          // Simple Ortographic or soft perspective projection
          const perspective = 3 / (3 + z3 * 0.5);
          return {
            x: centerX + x3 * scale * perspective,
            y: centerY + y3 * scale * perspective,
            z: z3,
          };
        });

        // Trace lines
        ctx.lineWidth = 0.95;
        edges.forEach(([u, v]) => {
          const pt1 = projectedPoints[u];
          const pt2 = projectedPoints[v];

          // Average Z determines depth opacity
          const avgZ = (pt1.z + pt2.z) / 2;
          const depthZ = (avgZ + 2) / 4; // Normalized 0..1
          const depthAlpha = Math.max(0.05, Math.min(0.45, 0.45 - depthZ * 0.3));

          ctx.beginPath();
          ctx.moveTo(pt1.x, pt1.y);
          ctx.lineTo(pt2.x, pt2.y);

          // Neon custom gradient effect
          const grad = ctx.createLinearGradient(pt1.x, pt1.y, pt2.x, pt2.y);
          grad.addColorStop(0, `rgba(0, 210, 255, ${depthAlpha})`);
          grad.addColorStop(1, `rgba(237, 177, 255, ${depthAlpha})`);

          ctx.strokeStyle = grad;
          ctx.stroke();
        });

        // Draw points with glowing flares
        projectedPoints.forEach((pt) => {
          const pointAlpha = Math.max(0.1, Math.min(0.8, 0.8 - ((pt.z + 2) / 4) * 0.4));
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(165, 231, 255, ${pointAlpha})`;
          ctx.fill();

          // Subtle flare
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 210, 255, ${pointAlpha * 0.35})`;
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      id="background-canvas"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#050505] overflow-hidden"
    />
  );
};
