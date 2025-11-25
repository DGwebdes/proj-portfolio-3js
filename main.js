import {
    scene,
    camera,
    renderer,
    light,
    controls,
    raycast,
} from "./utils/scene";
import { axesHelper, boxes, plane } from "./utils/geometry";
import { changeColor, coordinates } from "./utils/helpers";

//Prepare the Renderer
const canvas = renderer.domElement;
document.body.appendChild(canvas);

// Add objects/geometry to scene
scene.add(light, plane, axesHelper, boxes);

// Animate the scene
function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    controls.update();
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// Raycaster Event Listener
window.addEventListener("mousedown", onMouseDown);
function onMouseDown(e) {
    const coords = coordinates(
        e.clientX,
        canvas.clientWidth,
        e.clientY,
        canvas.clientHeight,
    );

    raycast.setFromCamera(coords, camera);

    const intersections = raycast.intersectObjects(boxes.children, true);
    if (intersections.length > 0) {
        const selectInter = intersections[0].object;
        console.log("Intersected => ", selectInter.name);
        selectInter.material.color = changeColor(
            Math.random(),
            Math.random(),
            Math.random(),
        );
    }
}

// Resize Event Listener
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
