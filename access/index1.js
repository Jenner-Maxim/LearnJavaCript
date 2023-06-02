// "use strict";
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
alert(x);

// with (Math){x = cos(2)};
delete Object.prototype;
var obj = {
  get x() {
    return 0;
  },
};
// Object.defineProperty(obj, "x", {value: 0, writable: false});
obj.x = 1;

function strictFunction(){
    alert(this)
}
strictFunction();