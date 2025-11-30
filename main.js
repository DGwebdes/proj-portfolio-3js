import {
    scene,
    camera,
    renderer,
    light,
    raycast,
} from "./utils/scene";
import { controls } from "./utils/controls";
import { axesHelper, boxes, plane } from "./utils/geometry";
import { changeColor, coordinates } from "./utils/helpers";
import { onWindowResize, onMouseDown } from "./utils/listeners";

//Prepare the Renderer
const canvas = renderer.domElement;
document.body.appendChild(canvas);

// Add objects/geometry to scene
scene.add(light, plane, axesHelper, boxes);

// Function that animates the scene
function animate() {
    controls.update();
    renderer.render(scene, camera);
}
// Initiate the animation loop
renderer.setAnimationLoop(animate);

// Raycaster Event Listener
window.addEventListener("mousedown", (e) => onMouseDown(e, raycast, camera, boxes, canvas, coordinates, changeColor));

// Resize Event Listener
window.addEventListener("resize", () => onWindowResize(camera, renderer));

