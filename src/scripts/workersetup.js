var code = `
onmessage = () => {
    console.log('Worker: Message received from main script');
    var vm = self.vm;
    var r = (async () => {
        function setupMouseListener() {
            return new Promise((resolve, reject) => {
                var ext = vm.runtime.ext_jg3d;
                var [renderer, Three, camera, scene] = [ext.renderer, ext.three, ext.camera, ext.scene];
    
                var rect = renderer.domElement.getBoundingClientRect();
                var scaleX = renderer.domElement.width / rect.width;
                var scaleY = renderer.domElement.height / rect.height;
                var out = null;
    
                function mousemoveHandler(event) {
                    var x = (event.clientX - rect.left) * scaleX;
                    var y = (event.clientY - rect.top) * scaleY;
    
                    var vector2 = new Three.Vector2(((x / renderer.domElement.width) * 2 - 1), (-(y / renderer.domElement.height) * 2 + 1));
                    /*console.log(x);*/
                    const raycaster = new Three.Raycaster();
                    raycaster.setFromCamera(vector2, camera);
                    var intersects = raycaster.intersectObjects(scene.children, true);
                    out = intersects;
                    /*document.removeEventListener("mousemove", mousemoveHandler);*/
                    resolve(out);
                }
    
                mousemoveHandler();
            });
        }
    
        try {
            const result = await setupMouseListener();
            return JSON.stringify(result)
        } catch (error) {
            return error.message
        }
    })();
    postMessage(r);
  }
`
const worker = new Worker(`data:text/plain;charset=utf-8;base64,${btoa(code)}`);
var q = "";
worker.onmessage = a => {q=a};