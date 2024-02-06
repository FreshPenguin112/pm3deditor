(function(a){"use strict";if(!a.extensions.unsandboxed)throw new Error("This Extension Must Run Unsandboxed");const b=a.vm;b.runtime.ext_jg3d||b.extensionManager.loadExtensionURL("jg3d"),b.runtime.extensionRuntimeOptions.javascriptUnsandboxed=!0;var c={OBJ:new b.runtime.ext_jg3d.OBJLoader,GLTF:new b.runtime.ext_jg3d.GLTFLoader,FBX:new b.runtime.ext_jg3d.FBXLoader};a.extensions.register(new class{getInfo(){return{id:"3dutil",name:"3d Utils",color1:"#B100FE",blockIconURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAT6SURBVHhe7ZtdqBVVFMfXnHuvXG9i9/ZhWYGVYWoggqGVFSV9ywUpohch+lARFXwRAu1BEB97kNAKheiphyAKEqKXICIyKuhFS0Qh+yKvZqLXj+sZ//+99syZU/ecMx975pzDzA/WzFpzzszstWatvfeZmSMV3WXArkvHOMSPyFJIKRiChI6PL2kKAsWDFEqRJ6SDhgGcdeoAFG4ZRCNeNpujFNauIk40AblBVZH6fpx0mrPW6wjMOmson0OeUTU/anadB9sgvMbG+fdfhYGrPp3zpIaW8PMDr9kNIk9DuP+LxsqJPDLgRsgpVUXunyfy3ZtQkpwJbt/9hsjx8CiG6yAXVHWH6wCEdT42InJ6D5QsZ8DRZm8SOXfJ2orTNrs62J+QW1QVmXxHZJj9vSPOToqMbraG8gfkNlWzkbUPWA/hVTfO/7gTBurYpfPk+pl63P2v2A0icyE87xPGykDGBFWW3ynyLeu8CHDWFbtEDp2wtpLaj6Q78vsYsJQhTGQvvwvFVSElZAjD5lTYGkPiliTZ4STkdlVxIT7A4orqXQUeeBhiIxyGLFa1M3H6gNUQprtxft9aGJzF9YLzBC1je7Zx1qAsgrC9DxurA+0yYAxyWlWRNfi58jF74i6leyzg9sLtIj//ZW1lFHJW1f/Tyh1uN9U1MkPk/F67pV9AIGZsQJJetXab1rf6gAk+OPUZ5ucc4fuUr4+hDnYb9RBkhdH+Q9s+YGA+FisRUFZUH1FnezFTWLlK7XbEmgh57E4ozUNO70HHMT+sJZgjxp8J8uCPQB4wVu/Bn2B0PGG2Jp8K8y4ey4J9aw9QH8aCE2N01mlIHgCLdx8WCIQ0etpCMf0SHK9xsM5A6gCEPGolYeqlJXDcc/Jb0EUACLMAnaT/kJp54c9x53iAmwBYzO0u9g/skBxSH8SCVz2HpwhOAxDgLcSCgch4dJ+ZxTq/We08yCUAAd6DWLCjTDp/YJ0j1b071MyTXAMQgvmDv8zqHTDlk2I8T0sxAQAex2uWRYtOrM5xnHWecjxPS2EBCPDuwoKBsPMHn+XBOnfcccal8AAEeJw74MeWF95j6g5dC0CvUAXArktLFQC7Li1VAOy6tFQBsOvSUgXArktLFQC7Li3tA8B7cf3MrM5PdFt9YzYkfKTs/4JFHo/F+ODV+YtvYACONd4XIC0j0SoD/oWE92a8BSL3PAmloNtUWVjwenznSbsS4CNy7mxuYh37FcYikYkLndOqG5ycQPueEzn6u92AAoB0bGwSbw5CnlUVycD0/Uf11LgoAVxCr/mN4rchW1TtTJrLeRli3gQcRpFM/kQtJRkDUFuNC9Fclon9STMMsm8wL0BfRCj4EOSlrbQKAg4v3YzzIt0jzs+EpKrNVDtF4NsC36gq8ulekfEYb2WEJM2A4Zp4q5qGo3shHKNSkzUAAXwva46quDK/YXFO9bbEDcAIGvqY1RUG3cmjWFcBCAiT8qYxkb/D3GhBjADMel7k/EVrKE7bnKYPaAcbN4/KqTMw0D+89yGt5GzZh/1R5xHn50JcXzD3B4zwAuQjVTGt/B7TS/7lIco0GfDFDyJP7bCGwkcoX6nqnjwDENA0UPnHsQj+ABENAPpx73GrK8ihxn+N+h2WGgNhZPF8jGBHIF9CDop/62jjMyuuS7NnQH/ecPSTPUNRpyml4S1I1PGNkIqKiqIRuQYHeAEU9sBGCQAAAABJRU5ErkJggg==",blocks:[{opcode:"changetexture",blockType:a.BlockType.COMMAND,text:"change object [object]'s texture from url [url]",arguments:{object:{type:a.ArgumentType.STRING,defaultValue:"Cube1"},url:{type:a.ArgumentType.STRING,defaultValue:"https://i.ibb.co/D8P9PpG/giphy.webp"}}},{opcode:"changematerial",blockType:a.BlockType.COMMAND,text:"change object [object]'s material from url [url]",arguments:{object:{type:a.ArgumentType.STRING,defaultValue:"Cube1"},url:{type:a.ArgumentType.STRING,defaultValue:"https://i.ibb.co/RBQh6zW/normals.jpg"}}},{opcode:"changemesh",blockType:a.BlockType.COMMAND,text:"change object [object]'s mesh from url [url] with filetype [filetype]",arguments:{object:{type:a.ArgumentType.STRING,defaultValue:"Cube1"},url:{type:a.ArgumentType.STRING,defaultValue:"https://raw.githubusercontent.com/Freshpenguin112/filehsotigjnt/main/among-us-3D-model-cgian.obj"},filetype:{type:a.ArgumentType.STRING,menu:"filetypes"}}},{opcode:"changeopacity",blockType:a.BlockType.COMMAND,text:"change object [object]'s opacity to [opacity] %",arguments:{object:{type:a.ArgumentType.STRING,defaultValue:"Cube1"},opacity:{type:a.ArgumentType.NUMBER,acceptReporters:!0,defaultValue:"50"}}},{opcode:"getopacity",blockType:a.BlockType.REPORTER,text:"get object [object]'s opacity as a percent",arguments:{object:{type:a.ArgumentType.STRING,defaultValue:"Cube1"}}}],menus:{filetypes:{acceptReporters:!0,items:[{text:".obj",value:".obj"},{text:".glb / .gltf",value:".glb / .gltf"},{text:".fbx",value:".fbx"}]}}}}changetexture(a){var c=new b.runtime.ext_jg3d.three.TextureLoader,d=c.load(a.url+""),e=b.runtime.ext_jg3d.scene.getObjectByName(a.object+"");if(e){const a=new b.runtime.ext_jg3d.three.MeshBasicMaterial({map:d});b.runtime.ext_jg3d.updateMaterialOfObjObject(e,a)}}changematerial(a){var c=new b.runtime.ext_jg3d.three.TextureLoader,d=c.load(a.url+""),e=b.runtime.ext_jg3d.scene.getObjectByName(a.object+"");if(e){const a=new b.runtime.ext_jg3d.three.MeshMatcapMaterial({matcap:d});b.runtime.ext_jg3d.updateMaterialOfObjObject(e,a)}}changemesh(a){const d=a.url+"";let e="obj";switch(a.filetype+""){case".glb / .gltf":e="glb";break;case".fbx":e="fbx"}return new Promise(f=>{let g=c.OBJ;"glb"==e?g=c.GLTF:"fbx"==e?g=c.FBX:void 0;g.load(d,d=>{g===c.GLTF&&(d=d.scene);var e=b.runtime.ext_jg3d.scene.getObjectByName(a.object+"");d.traverse(a=>{a instanceof b.runtime.ext_jg3d.three.Mesh&&(e.geometry=a.geometry.clone(),e.material=a.material)}),e.isPenguinMod=!0,f()},()=>{},a=>{console.error(a),f()})})}changeopacity(a){const c=+a.opacity;var d=b.runtime.ext_jg3d.scene.getObjectByName(a.object+"");if(d){var e=d.clone();b.runtime.ext_jg3d.scene.remove(d),(e.material.transparent=!0,e.material.opacity=c/100,e.material.format=1023,e.material.alphaTest=c/100),e.traverse(a=>{a.material=e.material}),b.runtime.ext_jg3d.scene.add(e)}else return}getopacity(a){var c=b.runtime.ext_jg3d.scene.getObjectByName(a.object+"");return c?100*c.material.opacity:void 0}})})(Scratch);