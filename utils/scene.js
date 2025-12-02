import * as THREE from "three";

const MAX_DISTANCE = 10;
const MIN_DISTANCE = 1;

// Initialize Scene
export const scene = new THREE.Scene();
// scene.fog = new THREE.Fog( 0xff00ff, 3, 10 );

// Camera Configurations
const FOV = 75;
const width = window.innerWidth;
const height = window.innerHeight;
const near = 0.1;
const far = 1000;
// Initialize Camera
export const camera = new THREE.PerspectiveCamera(
  FOV,
  width / height,
  near,
  far
);
camera.position.z = MAX_DISTANCE;
camera.position.y = MIN_DISTANCE;

// Initialize Lights
const color = 0xfff;
const intensity = 1;
export const light = new THREE.AmbientLight(color, intensity);
// White directional light at half intensity shining from the top.
// const directionalLight = new THREE.DirectionalLight( color, intensity * 0.5 );

// Initialize Renderer
export const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setSize(width, height);

// Initializing RayCaster and Intersections Listeners
export const raycast = new THREE.Raycaster();
