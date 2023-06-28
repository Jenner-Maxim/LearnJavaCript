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

// btn2.addEventListener(
//   "click",
//   (getFunction2 = () => {
//     let input2 = document.getElementById("input2").value;
//     setdata2.innerHTML += input2;
//     // console.log(input2);
//   })
// );

// let get2 = () => {
//   console.log(input2);
// };
// get2();

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

// let fname = "Maxim";
// for (i in fname) {
//   console.log(fname[i]);
// }

let charat = () => {
  let str = "Hello, Maxim";
  document.getElementById("charat").innerHTML = str.charAt(4);
};

const classFunc = () => {
  class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }
  mycar = new Car("Ford");
  document.getElementById("class").innerHTML = mycar.carname;
};

const arrayFind = () => {
  let numbers = [23, 4, 5, 3, 24, 53];
  let first = numbers.find(findFunction);

  function findFunction(value) {
    return value > 18;
  }
  // document.getElementById("find").innerHTML = first;

  let x = 5 ** 2;
  // let z = Math.pow(x, 2);
  document.getElementById("find").innerHTML = x;
};

let jsonFunction = () => {
  let text =
    '{"employees":[{"firstName":"Kagheni","lastName":"Maxim"}, {"firstName":"Ariane","lastName":"Mwasimuke"}, {"firstName":"Winner", "lastName":"Kagheni"}]}';
  obj = JSON.parse(text);
  document.getElementById("jsonstr").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;
};

const validateForm = () => {
  let x = document.forms["myForm"]["fname"].value;
  if (Number(x) || x === "") {
    alert("Please enter a valid Name");
    return false;
  }
  // if (isNaN(x) || x < 1 || x > 10) {
  //   alert("Input not valid");
  //   return false;
  // } else {
  //   alert("Input ok");
  //   return false;
  // }
};

const numbFunction = () => {
  // let inpObj = document.getElementById("input");
  // if (!inpObj.checkValidity()) {
  //   document.getElementById("message").innerHTML = inpObj.validationMessage;
  // } else {
  //   document.getElementById("message").innerHTML = "Input OK";
  // }

  let txt = "";
  if (document.getElementById("input").validity.rangeUnderflow) {
    txt = "Value too small";
  } else {
    txt = "Input OK";
  }
  document.getElementById("message").innerHTML = txt;
};

let checkFunction = () => {
  let checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is not checked");
  }
};

const objectFunction = () => {
  let txt = "";
  let person = {
    firstName: "",
    lastName: "",
    age: 36,
    eyecolor: "",
    // get eye() {
    //   return this.eyecolor;
    // },
    // set eyes(eye) {
    //   this.eyecolor = eye;
    // },

    get fullname() {
      return (this.firstName + " " + this.lastName).toUpperCase();
    },
  };
  person.firstName = "Kagheni";
  person.lastName = "Maxim";
  // person.eyes = "Blue";
  // person.fullname = function () {
  //   return this.firstName + " " + this.lastName;
  // };
  // let name = person.fullname();
  // person.nationality = "Congolese";
  // delete person.age;
  // let x;
  // for (x in person) {
  //   txt += person[x] + " ";
  // }
  document.getElementById("object").innerHTML = person.fullname;
};

const counterFunction = () => {
  let obj = { counter: 0 };
  Object.defineProperty(obj, "reset", {
    get: function () {
      this.counter = 5;
    },
  });
  Object.defineProperty(obj, "increment", {
    get: function () {
      this.counter++;
    },
  });
  Object.defineProperty(obj, "decrement", {
    get: function () {
      this.counter--;
    },
  });
  Object.defineProperty(obj, "add", {
    set: function (value) {
      this.counter += value;
    },
  });
  Object.defineProperty(obj, "sub", {
    set: function (value) {
      this.counter -= value;
    },
  });

  obj.reset;
  // obj.add = 5;
  // obj.sub = 3;
  // obj.increment;
  // obj.decrement;

  document.getElementById("counter").innerHTML = obj.counter;
};

let objectContructor = () => {
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.ages = age;
    this.eyeColor = eye;

    // this.name = function () {
    //   return this.firstName + " " + this.lastName;
    // };

    // this.changeName = function (name) {
    //   this.lastName = name;
    // };
  }
  Person.prototype.nationality = "Congolese";

  Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
  };

  let person1 = new Person("Kagheni", "Maxim", 53, "Blue");
  let person2 = new Person("Ariane", "Mwasimuke", 23, "Green");
  // person1.nationality = "Congolese";

  // person2.changeName("Kagheni");

  document.getElementById("object-constructor").innerHTML =
    "I'm  " +
    person1.ages +
    " and My sister is " +
    person2.ages +
    " and I'm " +
    person1.nationality +
    " and my siter's last name is " +
    person2.lastName +
    " and my full name is " +
    person1.name();
};

let property = () => {
  let person = {
    fname: "Kagheni",
    lname: "Maxim",
    language: "English",
  };
  Object.defineProperty(person, "language", { enumerable: false });
  Object.defineProperty(person, "year", { value: "2023" });

  Object.defineProperty(person, "fullName", {
    get: function () {
      return this.fname + " " + this.lname;
    },
  });

  document.getElementById("property").innerHTML = person.fullName;
};

let add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

let functionDef = () => {
  // function func(x, y) {
  //   return x * y;
  // }
  // let z = func(5, 6) + 3;

  let person = {
    fullName: function (city, country) {
      return this.fname + " " + this.lname + ", " + city + ", " + country;
    },
  };
  let person1 = {
    fname: "Kagheni",
    lname: "Maxim",
  };
  let person2 = {
    fname: "Ariane",
    lname: "Mwasimuke",
  };
  // let counter = 0;

  document.getElementById("function").innerHTML = add();
};
// document.getElementById("function").innerHTML = x;

// (function () {
//   document.getElementById("function").innerHTML = "function";
// })();

// function sumAll(a, b) {
//   return a * b;
// }
// // let z = location.hash;
// document.getElementById("function").innerHTML = window.sumAll(5, 5);

let htmldom = () => {
  let myName = document.querySelectorAll("p.name");
  // let x = myName.getElementsByTagName("p");
  let setElement = document.getElementById("set");
  let input = document.getElementById("input");

  setElement.innerHTML = myName[1].innerHTML;
  // console.log(x);
};

let formdom = () => {
  let form1 = document.getElementById("form1");
  let setForm = document.getElementById("set-form");
  let text = "";
  let i;

  for (i = 0; i < form1.length; i++) {
    text += form1[i].value + "<br>";
  }
  setForm.innerHTML = text;
};

setInput = () => {
  let toset = document.querySelectorAll(".toset");
  let btn = document.querySelectorAll(".btn");
  let inp = document.getElementById("inp");
  inp.value = btn[0].innerHTML;
};

// document.write(Date())

let changeAttrib = () => {
  let img = document.getElementById("img");
  img.src = "img/yellow.jpg";
};

let changeStyle = () => {
  let changeStyle = document.getElementById("style");
  let disappear = document.getElementById("disappear");
  changeStyle.style.color = "blue";
  changeStyle.style.fontFamily = "Arial";
  changeStyle.style.fontSize = "larger";
  disappear.style.visibility = "hidden";
};

let animation = () => {
  let elem = document.getElementById("animate");
  let pos = 0;
  let id = setInterval(frame, 5);

  function frame() {
    if (pos === 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
};

let changing = (chane) => {
  chane.innerHTML = "Hey";
};

let displayDate = () => {
  document.getElementById("disdate").innerHTML = Date();
};
// document.getElementById("event").onclick = displayDate;

let checkCookies = () => {
  let text = "";
  if (navigator.cookieEnabled === true) {
    text = "cookies are enabled";
  } else {
    text = "cookies are disabled";
  }
  // document.getElementById("disdate").innerHTML = text;
};

let changeFunction = () => {
  let x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
};

let mouseDown = (par) => {
  par.innerHTML = "You're clicking on the div";
};

let mouseUp = (par) => {
  par.innerHTML = "You're releasing the div";
};

let btn = document.getElementById("btn");
// btn.addEventListener("mouseover", eventListener);
// btn.addEventListener("mouseout", eventListener2);

function eventListener() {
  document.getElementById("eventListener").innerHTML = Date();
}

function eventListener1() {
  alert("Hey Maxim 1");
}

let p1 = 3;
let p2 = 2;
// btn.addEventListener("click", function () {
//   eventListener2(p1, p2);
// });
function eventListener2(a, b) {
  let result = a * b;
  document.getElementById("eventListener").innerHTML = result;
}

// window.addEventListener("resize", function () {
//   document.getElementById("eventListener").innerHTML = Math.random();
// });

// document.getElementById("div1").addEventListener("mousemove", eventFunc);
function eventFunc() {
  document.getElementById("eventListener").innerHTML = Math.random();
}

// document.getElementById("p1").addEventListener("click", function () {
//   document.getElementById("div1").removeEventListener("mousemove", eventFunc);
// });

// document.getElementById("div2").addEventListener(
//   "click",
//   function () {
//     alert("You clicked on the Orange box");
//   },
//   true
// );

// document.getElementById("p2").addEventListener(
//   "click",
//   function () {
//     alert("You clicked on the white box");
//   },
//   true
// );

// let x = document.getElementById("p2");
// if (x.addEventListener) {
//   x.addEventListener("click", browserfunc);
// } else if (x.attachEvent) {
//   x.attachEvent("onclick", browserfunc);
// }

function browserfunc() {
  alert("Hey Maxim");
}

let node = () => {
  let node = document.getElementById("node1").nodeType;
  // document.getElementById("node2").innerHTML = node;
  // alert(document.documentElement.innerHTML);
  // console.log(node);

  let para = document.createElement("p");
  let text = document.createTextNode("Hey Kagheni");
  para.appendChild(text);
  let element = document.getElementById("div1");
  let child = document.getElementById("p2");
  element.insertBefore(para, child);
  // child.remove();
  // element.removeChild(child);
  // child.parentNode.removeChild(child);
  // element.replaceChild(para, child);
  let collection = document.getElementsByTagName("p");
  // console.log(collection.length);
  let i;
  for (i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "red";
  }
};

// let timer = setTimeout(browserFunc, 3000);
let browserFunc = () => {
  // let w =
  //   window.innerWidth ||
  //   document.documentElement.clientWidth ||
  //   document.body.clientWidth;
  // let h =
  //   window.innerHeight ||
  //   document.documentElement.clientHeight ||
  //   document.body.clientHeight;

  // let x = document.getElementById("browser");
  // if (w <= 400) {
  //   alert("Less than 500");
  // }
  // window.open("app.html")
  // window.location.assign("app.html");
  // window.history.forward();
  // let txt;
  // let person = prompt("Please enter\nyour name", "Kagheni Jenner");
  // if (person === null || person === "") {
  //   txt = "User cancelled the prompt.";
  // } else {
  //   txt = "Hello " + person + "! How are you today?";
  // }

  // x.innerHTML = txt;
  // document.getElementById("browser.innerHTML = txt;
  let timers = setInterval(myTimer, 1000);
  let d = 10;
  function myTimer() {
    let x = document.getElementById("browser");
    x.innerHTML = document.cookie;
    if (d === 0) {
      clearInterval(timers);
      alert("Timeout");
    }
  }
  // alert("Hi");
};

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var exdays = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + exdays + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user !== "") {
    alert("Welocome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user !== "" && user !== null) {
      setCookie("username", user), 30;
    }
  }
}

let loadDoc1 = () => {
  let xhttp, xmlDoc, txt, x, i;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // callFunc(this);
      xmlDoc = this.responseXML;
      txt = "";
      x = xmlDoc.getElementsByTagName("ARTIST");
      for (i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
      }
      document.getElementById("demo").innerHTML = txt;
    }
  };
  xhttp.open("GET", "cd_catalog.xml", true);
  // xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send();
};

// function ajaxFunc(xhttp) {
//   document.getElementById("demo").innerHTML = xhttp.responseText;
// }

let loadDoc2 = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("demo").innerHTML =
        this.getResponseHeader("Last-Modified");
    }
  };
  xhttp.open("GET", "app.html", true);
  xhttp.send();
};

let loadDoc3 = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      serverFunc(this);
    }
  };
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
};

function serverFunc(xml) {
  let i;
  let xmlDoc = xml.responseXML;
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  let x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

let showHint = (str) => {
  let xhttp;
  if (str.length === 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "gethint.php?q=" + str, true);
  xhttp.send();
};

let showCunstomer = (str) => {
  let xhttp;
  if (str === "") {
    document.getElementById("txtCust").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("txtCust").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "getcustomer.php?q=" + str, true);
  xhttp.send();
};

let i = 0,
  len;
let displayCDs = (i) => {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cdFunc(this, i);
    }
  };
  xmlhttp.open("GET", "cd_catalog.xml", true);
  xmlhttp.send();
};

function cdFunc(xml, i) {
  let xmlDoc = xml.responseXML;
  let x = xmlDoc.getElementsByTagName("CD");
  len = x.length;
  document.getElementById("showCD").innerHTML =
    "Artist: " +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " +
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
  if (i < len - 1) {
    i++;
    displayCDs(i);
  }
}

function previous() {
  if (i > 0) {
    i--;
    displayCDs(i);
  }
}

// let x, xmlhttp, xmlDoc;
// xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "cd_catalog.xml", false);
// xmlhttp.send();
// xmlDoc = xmlhttp.responseXML;
// x = xmlDoc.getElementsByName("CD");
// table = "<tr><th>Aristist</th><th>Title</th></tr>";
// for (i = 0; i < x.length; i++) {
//   table += "<tr onclick='displayCD(" + i + ")'><td>";
//   table += x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
//   table += "</td><td>";
//   table += x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
//   table += "</td></tr>";
// }
// document.getElementById("demo").innerHTML = "<tr onclick='displayCD(" + i + ")'><td>";

// function displayCD(i) {
//   document.getElementById("showCD").innerHTML =
//     "Artist: " +
//     x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
//     "<br>Title: " +
//     x[i].getElementsByName("TITLE")[0].childNodes[0].nodeValue +
//     "<br>YEAR: " +
//     x[i].getElementsByName("YEAR")[0].childNodes[0].nodeValue;
// }

let x, xmlhttp, xmlDoc;
let xmlFunc = () => {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      xmlDoc = xmlhttp.responseXML;
      x = xmlDoc.getElementsByTagName("CD");
      table = "<tr><th>Artist</th><th>Title</th><tr>";
      for (i = 0; i < x.length; i++) {
        table += "<tr onclick='displayCD(" + i + ")'><td>";
        table += x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
        table += "</td></tr>";
      }
      document.getElementById("demo").innerHTML = table;
    }
  };
  xmlhttp.open("GET", "cd_catalog.xml", true);
  xmlhttp.send();
};
function displayCD(i) {
  document.getElementById("showCD").innerHTML =
    "Artist: " +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " +
    x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

let getXMLdata = (url) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("A1").innerHTML = this.status;
      document.getElementById("A2").innerHTML = this.statusText;
      document.getElementById("A3").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};

let jsonFunc = () => {
  // let myObj = { name: "Kagheni", age: 43, city: "Kampala" };
  // let myJSON = JSON.stringify(myObj);
  // window.location = "demo_json52a0.html?x=" + myJSON;

  // let myJSON = '{"name":"Kagheni","age":43,"city":"Kampala"}';
  // let myObj = JSON.parse(myJSON);
  // document.getElementById("json").innerHTML = myObj.age;

  // let myObj, myJSON, text, obj;
  // // Storing data:
  // myObj = { name: "Kagheni", age: 53, city: "Kampala" };
  // myJSON = JSON.stringify(myObj);
  // localStorage.setItem("testJSON", myJSON);

  // // Retrieving data:
  // text = localStorage.getItem("testJSON");
  // obj = JSON.parse(text);
  // document.getElementById("json").innerHTML = obj.name;

  // let xmlhttp = new XMLHttpRequest();
  // xmlhttp.onreadystatechange = function () {
  //   if (this.readyState === 4 && this.status == 200) {
  //     let myArr = JSON.parse(this.responseText);
  //     document.getElementById("json").innerHTML = myArr[2];
  //   }
  // };
  // xmlhttp.open("GET", "json_demo_array.json", true);
  // xmlhttp.send();

  let text =
    '{"name":"Kagheni", "age":"()=>{return 53}", "birth":"2001-08-14", "city": "Kampala"}';
  // let obj = JSON.parse(text, (key, value) => {
  //   if (key === "birth") {
  //     return new Date(value);
  //   } else {
  //     return value;
  //   }
  // });
  // obj.birth = new Date(obj.birth);
  // obj.age = eval("(" + obj.age + ")");

  let obj = {
    name: "Kagheni",
    age: 30,
    city: "Kampala",
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
  };
  // obj.age = obj.age.toString();
  let myJSON = JSON.stringify(obj);
  // obj.cars["car2"] = "Merscedes";
  delete obj.cars[1].models[1];
  let i,
    j,
    x = "";
  for (i in obj.cars) {
    x += "<h2>" + obj.cars[i].name + "</h2>";
    for (j in obj.cars[i].models) {
      x += obj.cars[i].models[j] + "<br>";
    }
  }

  let phpObj,
    dbParam,
    xmlhttp,
    y,
    txt = "";
  phpObj = { table: "customers", limit: 10 };
  dbParam = JSON.stringify(phpObj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // myObj = JSON.parse(this.responseText);
      txt += "<table border='1'>";
      // for (y in myObj) {
      //   txt += myObj[y].name + "<br>";
      // }
      // document.getElementById("json").innerHTML = txt;
    }
  };
  xmlhttp.open("GET", "json_demo_db_post.json", true);
  // xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send();

  let s = document.createElement("script");
  s.src = "demo_jsonp21346.json?callback=myDisplayFunction";
  document.body.appendChild(s);
};

function myDisplayFunction(myObj) {
  document.getElementById("json").innerHTML = myObj.name;
}
