export function onWindowResize(camera, renderer) {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

export function onMouseDown(
  e,
  raycast,
  camera,
  boxes,
  canvas,
  coordinates,
  changeColor
) {
  const coords = coordinates(
    e.clientX,
    canvas.clientWidth,
    e.clientY,
    canvas.clientHeight
  );

  raycast.setFromCamera(coords, camera);

  const intersections = raycast.intersectObjects(boxes.children, true);
  if (intersections.length > 0) {
    const selectInter = intersections[0].object;
    console.log("Intersected => ", selectInter.name);
    selectInter.material.color = changeColor(
      Math.random(),
      Math.random(),
      Math.random()
    );
  }
}
