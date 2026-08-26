import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground({ opacity = 0.5 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 600;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // 2. Three.js Gold Dust Particle System
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;     // X
      positions[i + 1] = (Math.random() - 0.5) * 10; // Y
      positions[i + 2] = (Math.random() - 0.5) * 8;  // Z
      scales[i / 3] = Math.random() * 0.08 + 0.02;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Particle Material with Gold Shimmer
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xD4AF37, // Artisan Gold
      size: 0.08,
      transparent: true,
      opacity: opacity,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 3. Three.js Elegant Wave Grid (Organic Leather Fabric Motion)
    const waveGeo = new THREE.PlaneGeometry(20, 12, 32, 24);
    const waveMat = new THREE.MeshBasicMaterial({
      color: 0x684A3A,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });

    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.rotation.x = -Math.PI * 0.35;
    waveMesh.position.y = -2;
    scene.add(waveMesh);

    // 4. Mouse Motion Parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles slowly
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      // Animate wave grid vertices for organic cloth movement
      const pos = waveGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const z = Math.sin(u * 0.5 + elapsedTime * 1.2) * 0.3 + Math.cos(v * 0.5 + elapsedTime * 1.5) * 0.2;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      // Parallax smooth camera shift
      camera.position.x += (mouseX - camera.position.x) * 0.03;
      camera.position.y += (-mouseY - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [opacity]);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />;
}
