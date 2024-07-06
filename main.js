const importObj = { 
    Math: {
        random: () => Math.random(),
    }
};

const data = require("fs").readFileSync("./wasi.wasm");

WebAssembly.instantiate(data, importObj).then( r => {

    const { instance } =  r;

    console.log(instance.exports.add(100, 99));
    

}).catch(console.log);

