/*jshint esversion:8*/
(function (Scratch) {
    "use strict";
    if (!Scratch.extensions.unsandboxed) {
        throw new Error("This Extension Must Run Unsandboxed");
    }
    const vm = Scratch.vm;
    if (!vm.runtime.ext_jg3d) {
        vm.extensionManager.loadExtensionURL("jg3d");
    }
    var ext = vm.runtime.ext_jg3d;
    var [renderer, three, camera, scene] = [
        ext.renderer,
        ext.three,
        ext.camera,
        ext.scene,
    ];
    vm.runtime.extensionRuntimeOptions.javascriptUnsandboxed = true;
    var MeshLoaders = {
        OBJ: ext.OBJLoader,
        GLTF: ext.GLTFLoader,
        FBX: ext.FBXLoader,
    };
    const icon =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAT6SURBVHhe7ZtdqBVVFMfXnHuvXG9i9/ZhWYGVYWoggqGVFSV9ywUpohch+lARFXwRAu1BEB97kNAKheiphyAKEqKXICIyKuhFS0Qh+yKvZqLXj+sZ//+99syZU/ecMx975pzDzA/WzFpzzszstWatvfeZmSMV3WXArkvHOMSPyFJIKRiChI6PL2kKAsWDFEqRJ6SDhgGcdeoAFG4ZRCNeNpujFNauIk40AblBVZH6fpx0mrPW6wjMOmson0OeUTU/anadB9sgvMbG+fdfhYGrPp3zpIaW8PMDr9kNIk9DuP+LxsqJPDLgRsgpVUXunyfy3ZtQkpwJbt/9hsjx8CiG6yAXVHWH6wCEdT42InJ6D5QsZ8DRZm8SOXfJ2orTNrs62J+QW1QVmXxHZJj9vSPOToqMbraG8gfkNlWzkbUPWA/hVTfO/7gTBurYpfPk+pl63P2v2A0icyE87xPGykDGBFWW3ynyLeu8CHDWFbtEDp2wtpLaj6Q78vsYsJQhTGQvvwvFVSElZAjD5lTYGkPiliTZ4STkdlVxIT7A4orqXQUeeBhiIxyGLFa1M3H6gNUQprtxft9aGJzF9YLzBC1je7Zx1qAsgrC9DxurA+0yYAxyWlWRNfi58jF74i6leyzg9sLtIj//ZW1lFHJW1f/Tyh1uN9U1MkPk/F67pV9AIGZsQJJetXab1rf6gAk+OPUZ5ucc4fuUr4+hDnYb9RBkhdH+Q9s+YGA+FisRUFZUH1FnezFTWLlK7XbEmgh57E4ozUNO70HHMT+sJZgjxp8J8uCPQB4wVu/Bn2B0PGG2Jp8K8y4ey4J9aw9QH8aCE2N01mlIHgCLdx8WCIQ0etpCMf0SHK9xsM5A6gCEPGolYeqlJXDcc/Jb0EUACLMAnaT/kJp54c9x53iAmwBYzO0u9g/skBxSH8SCVz2HpwhOAxDgLcSCgch4dJ+ZxTq/We08yCUAAd6DWLCjTDp/YJ0j1b071MyTXAMQgvmDv8zqHTDlk2I8T0sxAQAex2uWRYtOrM5xnHWecjxPS2EBCPDuwoKBsPMHn+XBOnfcccal8AAEeJw74MeWF95j6g5dC0CvUAXArktLFQC7Li1VAOy6tFQBsOvSUgXArktLFQC7Li3tA8B7cf3MrM5PdFt9YzYkfKTs/4JFHo/F+ODV+YtvYACONd4XIC0j0SoD/oWE92a8BSL3PAmloNtUWVjwenznSbsS4CNy7mxuYh37FcYikYkLndOqG5ycQPueEzn6u92AAoB0bGwSbw5CnlUVycD0/Uf11LgoAVxCr/mN4rchW1TtTJrLeRli3gQcRpFM/kQtJRkDUFuNC9Fclon9STMMsm8wL0BfRCj4EOSlrbQKAg4v3YzzIt0jzs+EpKrNVDtF4NsC36gq8ulekfEYb2WEJM2A4Zp4q5qGo3shHKNSkzUAAXwva46quDK/YXFO9bbEDcAIGvqY1RUG3cmjWFcBCAiT8qYxkb/D3GhBjADMel7k/EVrKE7bnKYPaAcbN4/KqTMw0D+89yGt5GzZh/1R5xHn50JcXzD3B4zwAuQjVTGt/B7TS/7lIco0GfDFDyJP7bCGwkcoX6nqnjwDENA0UPnHsQj+ABENAPpx73GrK8ihxn+N+h2WGgNhZPF8jGBHIF9CDop/62jjMyuuS7NnQH/ecPSTPUNRpyml4S1I1PGNkIqKiqIRuQYHeAEU9sBGCQAAAABJRU5ErkJggg==";

    class utils3d {
        getInfo() {
            return {
                id: "3dutil",
                name: "3d Utils",
                color1: "#B100FE",
                blockIconURI: icon,
                blocks: [
                    {
                        opcode: "changetexture",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "change object [object]'s texture from url [url]",
                        arguments: {
                            object: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Cube1",
                            },
                            url: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue:
                                    "https://i.ibb.co/D8P9PpG/giphy.webp",
                            },
                        },
                    },
                    {
                        opcode: "changematerial",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "change object [object]'s material from url [url]",
                        arguments: {
                            object: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Cube1",
                            },
                            url: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue:
                                    "https://i.ibb.co/RBQh6zW/normals.jpg",
                            },
                        },
                    },
                    {
                        opcode: "changemesh",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "change object [object]'s mesh from url [url] with filetype [filetype]",
                        arguments: {
                            object: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Cube1",
                            },
                            url: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "https://raw.githubusercontent.com/Freshpenguin112/filehsotigjnt/main/among-us-3D-model-cgian.obj"
                            },
                            filetype: {
                                type: Scratch.ArgumentType.STRING,
                                menu: "filetypes",
                            },
                        },
                    },
                ],
                menus: {
                    filetypes: {
                        acceptReporters: true,
                        items: [
                            { text: ".obj", value: ".obj" },
                            { text: ".glb / .gltf", value: ".glb / .gltf" },
                            { text: ".fbx", value: ".fbx" },
                        ],
                    },
                },
            };
        }
        changetexture(args, util) {
            var textureLoader = new three.TextureLoader();
            var texture = textureLoader.load(String(args.url));

            var object = scene.getObjectByName(String(args.object));
            if (object) {
                object.traverse(function (child) {
                    if (child instanceof three.Mesh) {
                        const textureMaterial = new three.MeshBasicMaterial({
                            map: texture,
                        });
                        child.material = textureMaterial;
                    }
                });
            }
        }
        changematerial(args, util) {
            var textureLoader = new three.TextureLoader();
            var matcapTexture = textureLoader.load(String(args.url));

            var objectt = scene.getObjectByName(String(args.object));
            if (objectt) {
                objectt.traverse(function (child) {
                    if (child instanceof three.Mesh) {
                        const matcapMaterial = new three.MeshMatcapMaterial({
                            matcap: matcapTexture,
                        });
                        child.material = matcapMaterial;
                    }
                });
            }
        }
        changemesh(args, util) {
            const url = String(args.url);
            // switch loaders based on file type
            let fileType = "obj";
            switch (Cast.toString(args.filetype)) {
                case ".glb / .gltf":
                    fileType = "glb";
                    break;
                case ".fbx":
                    fileType = "fbx";
                    break;
            }
            // we need to do a promise here so that stack continues on load
            return new Promise((resolve) => {
                let loader = MeshLoaders.OBJ;
                switch (fileType) {
                    case "glb":
                        loader = MeshLoaders.GLTF;
                        break;
                    case "fbx":
                        loader = MeshLoaders.FBX;
                        break;
                }
                loader.load(
                    url,
                    (object) => {
                        // success
                        if (loader === MeshLoaders.GLTF) {
                            object = object.scene;
                        }
                        var o = scene.getObjectByName(String(args.object));
                        o.geometry.dispose();
                        if (this.savedMeshes[url])
                            object = this.savedMeshes[url];
                        o.geometry = object.geometry.clone();
                        if (!this.savedMeshes[url])
                            this.savedMeshes[url] = object;
                        resolve();
                    },
                    () => {},
                    () => {}
                );
            });
        }
    }
    Scratch.extensions.register(new utils3d());
})(Scratch);
