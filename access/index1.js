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
