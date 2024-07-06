const importObj = {}

const data = require("fs").readFileSync("./wasi.wasm");

WebAssembly.instantiate(data, importObj).then( r => {

    const { instance } =  r;

    let sum = 0;
    for (let i = 0; i < 100000; i++){
        sum += instance.exports.add(100, 99);
    }
    console.log(sum);

}).catch(console.log);

