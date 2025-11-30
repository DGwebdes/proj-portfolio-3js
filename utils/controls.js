import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera, renderer } from "./scene.js";

// Initialize Orbit Controls and Configure it
export const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = 0.8;
controls.maxPolarAngle = 1.5;
controls.enablePan = false;
controls.maxDistance = 9; // Magic numbers it is
controls.minDistance = 5;
controls.autoRotate = false;
controls.enableDamping = true;
controls.maxAzimuthAngle = .5;
controls.minAzimuthAngle = -.5;
controls.enableZoom = false;
// controls.zoomToCursor = true;
