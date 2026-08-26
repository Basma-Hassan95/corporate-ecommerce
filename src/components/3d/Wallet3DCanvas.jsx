import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles, Layers } from 'lucide-react';

export default function Wallet3DCanvas({ engravingText = 'A. WAKEEL', fontStyle = 'serif', finishStyle = 'gold', color = '#5C3A29' }) {
  const mountRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const sceneRef = useRef(null);
  const walletGroupRef = useRef(null);
  const leftCoverRef = useRef(null);
  const rightCoverRef = useRef(null);
  const canvasTextureRef = useRef(null);
  const textMeshRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 400;

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Clear existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. LIGHTING SETUP FOR RICH LUXURY REFLECTIONS
    const ambientLight = new THREE.AmbientLight(0xFFF8F0, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xFFF0DD, 2.5);
    mainLight.position.set(4, 6, 4);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const goldSpotLight = new THREE.SpotLight(0xD4AF37, 3);
    goldSpotLight.position.set(-4, 4, 3);
    goldSpotLight.angle = Math.PI / 4;
    scene.add(goldSpotLight);

    const fillLight = new THREE.PointLight(0x9C7B69, 1.5, 10);
    fillLight.position.set(0, -2, 3);
    scene.add(fillLight);

    // 3. MASTER WALLET MODEL ASSEMBLY
    const walletGroup = new THREE.Group();
    walletGroupRef.current = walletGroup;
    scene.add(walletGroup);

    // Create Procedural Leather Bump Texture
    const leatherCanvas = document.createElement('canvas');
    leatherCanvas.width = 512;
    leatherCanvas.height = 512;
    const ctx = leatherCanvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 512, 512);

    // Add organic leather grain noise
    for (let i = 0; i < 40000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const radius = Math.random() * 1.5;
      const opacity = Math.random() * 0.15;
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    const leatherTexture = new THREE.CanvasTexture(leatherCanvas);
    leatherTexture.wrapS = THREE.RepeatWrapping;
    leatherTexture.wrapT = THREE.RepeatWrapping;
    leatherTexture.repeat.set(2, 2);

    // Premium Leather Material
    const leatherMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: 0.45,
      metalness: 0.15,
      map: leatherTexture,
      bumpMap: leatherTexture,
      bumpScale: 0.04
    });

    const innerLeatherMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color).multiplyScalar(0.85),
      roughness: 0.6,
      metalness: 0.05
    });

    const stitchMaterial = new THREE.MeshBasicMaterial({ color: 0xD8C3A5 });

    // --- LEFT COVER HINGE GROUP ---
    const leftGroup = new THREE.Group();
    leftCoverRef.current = leftGroup;
    walletGroup.add(leftGroup);

    const coverGeo = new THREE.BoxGeometry(1.6, 2.2, 0.08);
    const leftMesh = new THREE.Mesh(coverGeo, leatherMaterial);
    leftMesh.position.set(-0.8, 0, 0);
    leftMesh.castShadow = true;
    leftMesh.receiveShadow = true;
    leftGroup.add(leftMesh);

    // Inner Card Pockets Left
    for (let i = 0; i < 3; i++) {
      const pocketGeo = new THREE.BoxGeometry(1.4, 0.45, 0.03);
      const pocketMesh = new THREE.Mesh(pocketGeo, innerLeatherMaterial);
      pocketMesh.position.set(-0.8, -0.6 + i * 0.5, 0.05);
      leftGroup.add(pocketMesh);
    }

    // --- RIGHT COVER HINGE GROUP ---
    const rightGroup = new THREE.Group();
    rightCoverRef.current = rightGroup;
    walletGroup.add(rightGroup);

    const rightMesh = new THREE.Mesh(coverGeo, leatherMaterial);
    rightMesh.position.set(0.8, 0, 0);
    rightMesh.castShadow = true;
    rightMesh.receiveShadow = true;
    rightGroup.add(rightMesh);

    // Inner Card Pockets Right
    for (let i = 0; i < 3; i++) {
      const pocketGeo = new THREE.BoxGeometry(1.4, 0.45, 0.03);
      const pocketMesh = new THREE.Mesh(pocketGeo, innerLeatherMaterial);
      pocketMesh.position.set(0.8, -0.6 + i * 0.5, 0.05);
      rightGroup.add(pocketMesh);
    }

    // --- DYNAMIC ENGRAVING TEXTURE CANVAS ON FRONT COVER ---
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 512;
    textCanvas.height = 256;
    const textCtx = textCanvas.getContext('2d');
    textCtx.clearRect(0, 0, 512, 256);

    const fontName = fontStyle === 'script' ? 'cursive' : fontStyle === 'block' ? 'Cinzel, sans-serif' : 'Cormorant Garamond, serif';
    textCtx.font = `bold 52px ${fontName}`;
    textCtx.textAlign = 'center';
    textCtx.textBaseline = 'middle';

    if (finishStyle === 'gold') {
      textCtx.fillStyle = '#D4AF37';
      textCtx.shadowColor = 'rgba(0,0,0,0.8)';
      textCtx.shadowBlur = 4;
      textCtx.shadowOffsetY = 2;
    } else {
      textCtx.fillStyle = '#211210';
      textCtx.shadowColor = 'rgba(255,255,255,0.15)';
      textCtx.shadowBlur = 2;
    }

    textCtx.fillText((engravingText || 'A. WAKEEL').toUpperCase(), 256, 128);

    const textTexture = new THREE.CanvasTexture(textCanvas);
    canvasTextureRef.current = textTexture;

    const textPlaneGeo = new THREE.PlaneGeometry(1.3, 0.65);
    const textPlaneMat = new THREE.MeshStandardMaterial({
      map: textTexture,
      transparent: true,
      depthWrite: false,
      roughness: finishStyle === 'gold' ? 0.2 : 0.8,
      metalness: finishStyle === 'gold' ? 0.8 : 0.0
    });

    const textMesh = new THREE.Mesh(textPlaneGeo, textPlaneMat);
    textMesh.position.set(-0.8, -0.4, -0.05);
    textMesh.rotation.y = Math.PI;
    leftGroup.add(textMesh);
    textMeshRef.current = textMesh;

    // --- SADDLE STITCHING DETAILS AROUND EDGES ---
    const stitchPoints = [];
    for (let x = -1.55; x <= 1.55; x += 0.08) {
      stitchPoints.push(new THREE.Vector3(x, 1.05, 0.04));
      stitchPoints.push(new THREE.Vector3(x, -1.05, 0.04));
    }
    const stitchGeo = new THREE.BufferGeometry().setFromPoints(stitchPoints);
    const stitches = new THREE.LineSegments(stitchGeo, stitchMaterial);
    walletGroup.add(stitches);

    walletGroup.rotation.x = 0.2;
    walletGroup.rotation.y = -0.4;

    // 4. MOUSE ROTATION CONTROLS
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging || !walletGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      walletGroupRef.current.rotation.y += deltaX * 0.01;
      walletGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // 5. ANIMATION LOOP
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (walletGroupRef.current) {
        walletGroupRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

        if (autoRotate && !isDragging) {
          walletGroupRef.current.rotation.y += 0.005;
        }

        const targetAngle = isOpen ? Math.PI * 0.4 : 0;
        if (leftCoverRef.current && rightCoverRef.current) {
          leftCoverRef.current.rotation.y = THREE.MathUtils.lerp(leftCoverRef.current.rotation.y, -targetAngle, 0.08);
          rightCoverRef.current.rotation.y = THREE.MathUtils.lerp(rightCoverRef.current.rotation.y, targetAngle, 0.08);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [color]);

  useEffect(() => {
    if (!canvasTextureRef.current) return;
    const canvas = canvasTextureRef.current.image;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 256);

    const fontName = fontStyle === 'script' ? 'cursive' : fontStyle === 'block' ? 'Cinzel, sans-serif' : 'Cormorant Garamond, serif';
    ctx.font = `bold 52px ${fontName}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (finishStyle === 'gold') {
      ctx.fillStyle = '#D4AF37';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetY = 2;
    } else {
      ctx.fillStyle = '#211210';
      ctx.shadowColor = 'rgba(255,255,255,0.15)';
      ctx.shadowBlur = 2;
    }

    ctx.fillText((engravingText || 'YOUR INITIALS').toUpperCase(), 256, 128);
    canvasTextureRef.current.needsUpdate = true;
  }, [engravingText, fontStyle, finishStyle]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '420px', backgroundColor: 'transparent' }}>
      
      {/* Canvas Container */}
      <div ref={mountRef} style={{ width: '100%', height: '100%', cursor: 'grab' }} />

      {/* Controls Floating Bar */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(33, 21, 20, 0.85)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--accent-gold-soft)',
        borderRadius: '30px',
        padding: '0.4rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        color: 'var(--bg-parchment)',
        fontSize: '0.8rem',
        zIndex: 10
      }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--accent-gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: '600' }}
        >
          <Layers size={14} /> {isOpen ? 'Close Wallet Model' : 'Unfold Leather Model'}
        </button>

        <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          style={{ background: 'none', border: 'none', color: autoRotate ? 'var(--accent-gold)' : '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem' }}
        >
          <RotateCw size={14} /> {autoRotate ? 'Pause Orbit' : 'Auto Orbit Spin'}
        </button>

        <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>

        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'rgba(250, 246, 240, 0.7)' }}>
          <Sparkles size={13} color="var(--accent-gold)" /> Drag mouse to rotate 360°
        </span>
      </div>

    </div>
  );
}
