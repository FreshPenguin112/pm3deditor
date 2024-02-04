(async () => {
    var ext = vm.runtime.ext_jg3d;
    var mouse = vm.runtime.ioDevices.mouse;
    var [renderer, Three, camera, scene] = [
        ext.renderer,
        ext.three,
        ext.camera,
        ext.scene,
    ];
    var rect = renderer.domElement.getBoundingClientRect();
    var scaleX = renderer.domElement.width / rect.width;
    var scaleY = renderer.domElement.height / rect.height;
    var x = (mouse.getClientX() - rect.left) * scaleX;
    var y = (mouse.getClientY() - rect.top) * scaleY;
    var vector2 = new Three.Vector2(
        (x / renderer.domElement.width) * 2 - 1,
        -(y / renderer.domElement.height) * 2 + 1
    );
    const raycaster = new Three.Raycaster();
    raycaster.setFromCamera(vector2, camera);
    var intersects = raycaster.intersectObjects(scene.children, true);
    return JSON.stringify(intersects);
})();
