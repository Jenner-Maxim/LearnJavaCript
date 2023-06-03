"use strict";
// tom = 12;
scopeFunction();
// document.getElementById("scope").innerHTML = "Hi " + carName;
function scopeFunction() {
  // "use strict"
  //   carName = "Bugatti";
}

var scope1 = "Maxim";
document.getElementById("scope").innerHTML = window.scope1;

eval("var x = 2");
// alert(x);

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
