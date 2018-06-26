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
function LegacyLetter(number) {
    this.number = number;
}

LegacyLetter.prototype.getNumber = function() {
    return this.number;
}

let legacyA = new LegacyLetter(1);
let legacyB = new LegacyLetter(2);
let legacyZ = new LegacyLetter(26);

console.log(
    legacyA.getNumber(),
    legacyB.getNumber(),
    legacyZ.getNumber(),
)

  //
  function recursive(flag) {
      if(flag === 2) {
          return;
      }
      recursive(++flag);
  }

  recursive(0);

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

  //
  let x = 10;
  let y = 20;
  function foo(z) {
      let x = 100;
      return x + y + z;
  }

  console.log(foo(30));

  //
  var xEnvironment = 10;
  let yEnvironment = 20;

  console.log(
      xEnvironment,
      yEnvironment,
  )

  console.log(
      this.xEnvironment,
      this.yEnvironment,
  )

  this['not valid ID'] = 30;

  console.log(
      this['not valid ID'],
  );