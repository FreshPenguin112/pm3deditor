const worker = new Worker("https://raw.githubusercontent.com/FreshPenguin112/pm3deditor/main/src/scripts/worker.js");
var q = "";
worker.onmessage = a => {q=a};