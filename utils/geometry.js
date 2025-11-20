import * as THREE from "three";
import { createMesh } from "./helpers";

// Create a Plane
const gPlane = new THREE.PlaneGeometry(30, 30);
const mPlane = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
});
export const plane = new THREE.Mesh(gPlane, mPlane);
plane.rotation.x += Math.PI / 2;
plane.name = "plane";
// console.log(plane);

// Create a Geometry
const gCube = new THREE.BoxGeometry(1, 1, 1);

// Create Box Group
export const boxes = new THREE.Group();
boxes.add(
    createMesh({
        geometry: gCube,
        material: new THREE.MeshBasicMaterial(),
        position: { x: 2, y: 0, z: 2 },
        scale: { x: 2, y: 2, z: 3 },
        color: 0x00ff74,
        name: "New boy",
    }),
);
boxes.add(
    createMesh({
        geometry: gCube,
        material: new THREE.MeshBasicMaterial(),
        position: { x: 0, y: 1, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
        color: 0xff55ff,
        name: "olswe",
    }),
);

export const axesHelper = new THREE.AxesHelper(5);
axesHelper.setColors("red", "green", "blue");
