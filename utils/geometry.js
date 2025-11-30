import * as THREE from "three";
import { createMesh } from "./helpers";

// Create a Plane
const gPlane = new THREE.PlaneGeometry(50, 30, 5, 5);
const mPlane = new THREE.MeshBasicMaterial({
    color:"#03060f",
    side: THREE.DoubleSide,
    wireframe: true,
});
export const plane = new THREE.Mesh(gPlane, mPlane);
plane.rotation.x += Math.PI / 2;
plane.name = "plane";
// console.log(plane);

// Create a Cube Geometry
const cubeGeo = new THREE.BoxGeometry(1, 1, 1);

// Create Box Group
export const boxes = new THREE.Group();
boxes.add(
    createMesh({
        geometry: cubeGeo,
        material: new THREE.MeshBasicMaterial(),
        position: { x: -5, y: 5, z: -5 },
        scale: { x: 2, y: 2, z: 3 },
        color: 0x00ff74,
        name: "Box 1",
    }),
);
boxes.add(
    createMesh({
        geometry: cubeGeo,
        material: new THREE.MeshBasicMaterial(),
        position: { x: 3, y: 1, z: 3 },
        scale: { x: 1, y: 1, z: 1 },
        color: 0xff55ff,
        name: "Box 2",
    }),
);

export const axesHelper = new THREE.AxesHelper(5);
axesHelper.setColors("red", "green", "blue");
