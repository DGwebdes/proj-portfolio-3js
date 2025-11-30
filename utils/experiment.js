import * as THREE from "three";

// --- Scene Setup ---
    const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 100);
  camera.position.set(0, 2, 8);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5,5,5);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x404040));

  // --- Base Cube Geometry ---
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

  // --- Morph Target: Pyramid Geometry ---
  const pyramidGeometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    // Base square (same as cube base)
    -0.5, -0.5,  0.5,
     0.5, -0.5,  0.5,
     0.5, -0.5, -0.5,
    -0.5, -0.5, -0.5,
    // Top vertex (triangle/pyramid tip)
     0.0,  0.5,  0.0
  ]);

  // We'll match the cube's vertex count for morphing
  // Cube has 24 vertices (8 unique, but 24 because of faces)
  // So we create a Float32Array of length 24*3
  const morphPositions = new Float32Array(cubeGeometry.attributes.position.count * 3);

  // Map each cube vertex to pyramid shape
  for(let i=0; i<cubeGeometry.attributes.position.count; i++){
    const x = cubeGeometry.attributes.position.getX(i);
    const z = cubeGeometry.attributes.position.getZ(i);
    morphPositions[i*3 + 0] = x * 0.5;   // scale base smaller
    morphPositions[i*3 + 1] = (x === 0.5 && z === 0.5) ? 0.5 : -0.5; // move top vertex
    morphPositions[i*3 + 2] = z * 0.5;
  }

  pyramidGeometry.setAttribute('position', new THREE.BufferAttribute(morphPositions, 3));

  // Add morph target to cube geometry
  cubeGeometry.morphAttributes.position = [pyramidGeometry.attributes.position];

  const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, flatShading: true, morphTargets: true });
  const mesh = new THREE.Mesh(cubeGeometry, material);
  scene.add(mesh);

  // --- GSAP Animation ---
  gsap.to(mesh.morphTargetInfluences, {
    0: 1,       // morph to pyramid
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });

  gsap.to(mesh.position, {
    x: 2,
    y: 1,
    z: -2,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
  });

  // --- Animation Loop ---
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // --- Handle Window Resize ---
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });