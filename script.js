function add(a, b) {
    return a + b;
}

let sum = 0;

for (let i = 0; i < 100000; i++){
    sum += add(100, 99)
}

console.log(sum)
