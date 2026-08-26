import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xFFF8F0, 1.5);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xD4AF37, 4, 12);
    goldLight.position.set(2, 3, 4);
    scene.add(goldLight);

    const coffeeLight = new THREE.PointLight(0x684A3A, 3, 10);
    coffeeLight.position.set(-3, -2, 2);
    scene.add(coffeeLight);

    // Create 3D Floating Geometry Items
    const itemsGroup = new THREE.Group();
    scene.add(itemsGroup);

    // 1. Floating Gold Coins / Monograms
    const coinGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.08, 32);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xD4AF37,
      metalness: 0.95,
      roughness: 0.15
    });

    const coins = [];
    for (let i = 0; i < 8; i++) {
      const coin = new THREE.Mesh(coinGeo, coinMat);
      coin.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4
      );
      coin.rotation.x = Math.random() * Math.PI;
      coin.rotation.y = Math.random() * Math.PI;
      coin.scale.setScalar(0.4 + Math.random() * 0.4);
      itemsGroup.add(coin);
      coins.push({
        mesh: coin,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatSpeed: 0.5 + Math.random() * 1.0,
        initialY: coin.position.y
      });
    }

    // 2. Floating Leather Cubes / Cards
    const cardGeo = new THREE.BoxGeometry(1.2, 0.8, 0.05);
    const leatherMat = new THREE.MeshStandardMaterial({
      color: 0x684A3A,
      roughness: 0.5,
      metalness: 0.1
    });

    const cards = [];
    for (let i = 0; i < 5; i++) {
      const card = new THREE.Mesh(cardGeo, leatherMat);
      card.position.set(
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      );
      card.rotation.z = (Math.random() - 0.5) * 0.5;
      itemsGroup.add(card);
      cards.push({
        mesh: card,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        floatSpeed: 0.4 + Math.random() * 0.8,
        initialY: card.position.y
      });
    }

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Animate 3D coins
      coins.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.position.y = item.initialY + Math.sin(elapsedTime * item.floatSpeed) * 0.25;
      });

      // Animate 3D cards
      cards.forEach((item) => {
        item.mesh.rotation.z += item.rotSpeed;
        item.mesh.position.y = item.initialY + Math.cos(elapsedTime * item.floatSpeed) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 500;
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
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />;
}
