// "use strict";
// tom = 12;
scopeFunction();
// document.getElementById("scope").innerHTML = "Hi " + carName;
function scopeFunction() {
  // "use strict"
  //   carName = "Bugatti";
}

// var scope1 = "Maxim";
// document.getElementById("scope").innerHTML = window.scope1;

// eval("var x = 2");
// // alert(x);

// with (Math){x = cos(2)};
/* delete Object.prototype;
var obj = {
  get x() {
    return 0;
  },
}; */
// Object.defineProperty(obj, "x", {value: 0, writable: false});
// obj.x = 1;

function strictFunction() {
  alert(this);
}
// strictFunction();

/* var x = this;
document.getElementById("this").innerHTML = x; */

function thisFunction() {
  // "use strict";
  var person = {
    fname: "Kagheni",
    lname: "Maximillien",
    id: 118887,
    fullname: function () {
      return this;
    },
  };
  /*   var x = this;
  function thisInFunction(){
    return this
  } */

  var person1 = {
    fullname: function () {
      return this.fname + " " + this.lname;
    },
  };
  var person2 = {
    fname: "Kagheni",
    lname: "Maximillien",
  };
  var x = person1.fullname.call(person2);
  document.getElementById("this").innerHTML = x;
}

function letFunction() {
  let i = 5;
  for (let i = 0; i < 10; i++) {}

  let carName = "Maxim";
  document.getElementById("let").innerHTML = window.carName;
}

function constFunction() {
  const car = {
    type: "Ferrari",
    model: "500",
    color: "Black",
  };
  car.color = "Red";
  car.ower = "Kagheni";

  const carArray = ["Ferrari", "Kagheni", "Maxim"];
  carArray[1] = "Bugatti";
  carArray.push("Audi");
  document.getElementById("const").innerHTML = carArray;
}

const arrowFunction = () => {
  var hello;
  hello = function () {
    return "Hello Word!";
  };

  hello = (val) => "Hello Word! from " + val;
  document.getElementById("arrow").innerHTML = hello("Arrow Function!");
};

// var helloworld;
// hello = function () {
//   document.getElementById("regular").innerHTML += this;
// };
// // hello();

// window.addEventListener("load", hello);

// document
//   .getElementById("regularFunction")
//   .addEventListener("click", helloworld);
// document
//   .getElementById("regularFunction")
//   .addEventListener("click", arrowFunction);

// hello = () => {
//   document.getElementById("regular").innerHTML += this;
// };
// window.addEventListener("load", hello);
// document.getElementById("regularFunction").addEventListener("click", hello);

function classFunction() {
  class Car {
    constructor(brand) {
      this._carname = brand;
    }
    /*     present() {
      return "I have a  " + this.carname;
    } */
    set carname(x) {
      this._carname = x;
    }
    get carname() {
      return this._carname;
    }
  }
  /*   class Model extends Car{
    constructor(brand, mod){
      super(brand);
      this.model = mod;
    }
    show(){
      return this.present() + ", it is a " + this.model;
    }
  } */
  var mycar = new Car("Ford");
  mycar.carname = "Volvo";
  document.getElementById("class").innerHTML = mycar.carname;
}
/* class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new Car("Ford");
document.getElementById("class").innerHTML = mycar.carname;
 */

let debuggerFunction = () => {
  var x = 15 * 5;
  debugger;
  document.getElementById("debugger").innerHTML = x;
};

let bestPractices = () => {
  let bestPractices = (x, y) => {
    if (y === undefined) {
      y = 0;
    }
    return x * y;
  };
  document.getElementById("best").innerHTML = bestPractices(4);
};

let commonMistakes = () => {
  var x = 0.1;
  var y = 0.2;
  var z = (x * 10 + y * 10) / 10;
  document.getElementById("mistake").innerHTML =
    typeof myobj !== "undefined" && myobj !== null;
};

let input;
const getFunction = () => {
  input = document.getElementById("input").value;
  document.getElementById("setdata").innerHTML += input;
  // console.log(input);
};

// let getFunction2;
let btn2 = document.getElementById("btn2");
let setdata2 = document.getElementById("setdata2");

btn2.addEventListener(
  "click",
  (getFunction2 = () => {
    let input2 = document.getElementById("input2").value;
    setdata2.innerHTML += input2;
    console.log(input2);
  })
);

let get2 = () => {
  console.log(input2);
};
get2();

// ECMAScript  5 - JavaScript 5

// let str = "           Maxim           ";
// alert(str.trim());

let checkArray = () => {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  let x = document.getElementById("array");
  x.innerHTML = Array.isArray(fruits);
};

let forEachArry = () => {
  let txt = "";
  let numbers = [53, 32, 2, 22, 52];
  numbers.forEach(arrayforEach);
  document.getElementById("foreach").innerHTML = txt;
  function arrayforEach(value) {
    txt = txt + value + "<br/>";
  }
};

let mapArray = () => {
  let number1 = [52, 452, 42, 422, 242];
  let number2 = number1.map(mapArryFunction);

  document.getElementById("map").innerHTML = number2;

  function mapArryFunction(value) {
    return value * 2;
  }
};

let arrayFilter = () => {
  let number1 = [23, 5, 2, 36, 13, 34];
  let over18 = number1.some(filterFunction);
  document.getElementById("filter").innerHTML = over18;
  function filterFunction(value) {
    return value > 18;
  }
};

let reduceArray = () => {
  let number1 = [23, 5, 2, 36, 13, 34];
  let sum = number1.reduceRight(reduceFunction);
  document.getElementById("reduce").innerHTML = "The sum is: " + sum;
  function reduceFunction(total, value) {
    return total + value;
  }
};

let indexOfArray = () => {
  let fruits = ["Apple", "Orange", "Apple", "Mango"];
  let a = fruits.lastIndexOf("Apple");
  document.getElementById("indexof").innerHTML =
    "Apple is found in position " + a;
};

let jsonParse = () => {
  // let txt = '{"name":"Maxim", "age":35, "city": "Kampala"}'
  let obj = { name: "Maxim", age: 35, city: "Kampala" };
  var myJSON = JSON.stringify(obj);
  document.getElementById("json").innerHTML = myJSON;
};

let getterSetter = () => {
  // let ffname = document.getElementById("fname").value;
  // let llname = document.getElementById("lname").value;

  let person = {
    fname: "Kagheni",
    lname: "Maxim",
    language: "NO",
    // get lang() {
    //   return this.language;
    // },
    // set lang(value) {
    //   this.language = value.toUpperCase();
    // },
  };
  // person.lang = "en";

  Object.defineProperty(person, "language", {
    get: function () {
      return language;
    },
    set: function (value) {
      language = value.toUpperCase();
    },
  });
  // txt = "";
  // for (let x in person) {
  //   txt += person[x] + "<br>";
  // }

  person.language = "en";
  document.getElementById("getset").innerHTML = person.language;
};

let fname = "Maxim";
for (i in fname) {
  console.log(fname[i]);
}

let charat = () => {
  let str = "Hello, Maxim";
  document.getElementById("charat").innerHTML = str.charAt(4);
}