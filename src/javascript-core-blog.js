let point = {
    x: 10,
    y: 20,
};

let point3D = {
    z: 30,
    __proto__: point,
};

console.log(
    point3D.x,
    point3D.y,
    point3D.z
);

//
let empty = {};
console.log(
    empty.toString,
    empty.x
);

//
let dict = Object.create(null);
console.log(dict.toString);

//
let protoA = { x: 10 };
let protoB = { x: 20 };

let objectC = Object.create(protoA);
console.log(objectC.x);

Object.setPrototypeOf(objectC, protoB);
console.log(objectC.x);

//
let letter = {
    getNumber() {
        return this.number;
    }
};

let a = { number: 1, __proto__: letter };
let b = { number: 2, __proto__: letter };
//...
let z = { number: 26, __proto__: letter };

console.log(
    a.getNumber(),
    b.getNumber(),
    z.getNumber()
)

//
class Letter {
    constructor(number) {
        this.number = number;
    }

    getNumber() {
        return this.number;
    }
}

let letterA = new Letter(1);
let letterB = new Letter(2);
//
let letterZ = new Letter(26);

console.log(
    letterA.getNumber(),
    letterB.getNumber(),
    letterZ.getNumber()
);

//
function *gen() {
    yield 1;
    return 2;
  }
   
  let g = gen();
   
  console.log(
    g.next().value, // 1
    g.next().value, // 2
  );
  