function time() {
  // document.getElementById('time').innerHTML = Date();
  var timebutton = document.getElementById("time");
  timebutton.innerHTML = Date();
}

function hello() {
  var hellobutton = document.getElementById("hello");
  hellobutton.innerHTML = 5 + 3;
}

function changecolor() {
  var image = document.getElementById("blue");
  if (image.src.match("changecolor")) {
    image.src = "img/blue.jpg";
  } else {
    image.src = "img/yellow.jpg";
  }
}

function darckmode() {
  var darck = document.getElementById("darck");
  darck.style.background = "black";
}

function validate() {
  var input = document.getElementById("numb").value;
  var text;
  if (isNaN(input) || input < 1 || input > 10) {
    text = "Wrong input";
  } else {
    text = "Submit successfull";
  }
  document.getElementById("message").innerHTML = text;
  // input.innerHTML = text;
}

// window.alert(5 + 3);

// document.write(5 + 3);

console.log(5 + 9);

var x;
x = 123e-5;
var y = 123e5;
var z = 123e-5;

var cars = ["BMW", "Benz", "Ferrari"];

var person = {
  firstName: "Kagheni",
  lastName: "Maxim",
  money: 20000000,
  haircolor: "blue",
};
document.getElementById("answer").innerHTML =
  person.lastName + " has " + person.money + " shillings";

document.getElementById("type").innerHTML =
  typeof "Maxim" +
  "<br>" +
  typeof 5.43 +
  "<br>" +
  typeof false +
  "<br>" +
  typeof [3, "Maxim", 5] +
  "<br>" +
  typeof { name: "Jenner", age: 30 };

var per_und = null;
document.getElementById("undefined").innerHTML = typeof per_und;

var und = typeof undefined;
var nu = typeof null;
var nund = null === undefined;
var nundeq = null == undefined;

document.getElementById("null").innerHTML =
  und + "<br>" + nu + "<br>" + nund + "<br>" + nundeq;

function celcius(f) {
  return (5 / 9) * (f - 32);
}
var textcel = "The temperature is " + celcius(34) + " Celsius";
document.getElementById("func").innerHTML = textcel;

var person = {
  firstName: "Kagheni",
  lastName: "Maximillien",
  id: 118887,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
document.getElementById("object").innerHTML = person.fullName();

var carName = "Volve";
function myScope() {
  carName = "Volvo";
}
document.getElementById("scope").innerHTML = carName;

/* function events(){
  this.innerHTML = Date();
} */

var textLength = "Kagheni Jenner Maximillien";
var stringObject = new String("Kagheni Jenner Maximillien"); // Not advisable
var callLength = textLength.length;
document.getElementById("length").innerHTML = callLength;
// document.getElementById('length').innerHTML = textLength.length;

// document.getElementById("strings").innerHTML = textLength.concat(" Maxim");

var str = "Apple, Banana, Kiwi, Avocado, Kiwi";
var replaceString = str.replace(/Kiwi/g, "Maxim");
var uppString = str.toUpperCase();
var lowerString = str.toLowerCase();
var res = str.substr(-5);
var pos = str.search("locate");
var name1 = "Kagheni";
var name2 = "Jenner";
var name3 = name1.concat(" ", name2);
var strPosition = str.charAt(0);
var strUnicode = str.charCodeAt(7);
var arr = str.split(",");
var arrChar = str.split("");
document.getElementById("strings").innerHTML = arrChar[0];

var numb1 = 0.99999999999999999;
var numb2 = 0.2 + 0.1;
var numb3 = (0.2 * 10 + 0.1 * 10) / 10;
var hex = 0xff;
var decimal = 128;
var decimalHex = decimal.toString(16);
var decimalOct = decimal.toString(8);
var decimalBin = decimal.toString(2);
var infinityNumb = -34 / 0;
var notNumb = 45 / "Maxim";
var notNumbVal = isNaN(notNumb);
var notNumbOper = NaN + "45";

function infinityfunc() {
  var infiNumb = 2;
  var txt = "";
  while (infiNumb != Infinity) {
    infiNumb *= infiNumb;
    txt = txt + infiNumb + "<br>";
  }
  document.getElementById("numbers").innerHTML = txt;
}

var numbMethod = new Date();
var numbMethodNumb = Number(numbMethod);
document.getElementById("numbers").innerHTML = numbMethodNumb;

function putin() {
  var input = document.getElementById("getinput").value;
  input.innerHTML = set.value("43");
}

function mathFunction() {
  document.getElementById("math").innerHTML = Math.pow(43, 2);
}

function dateFunction() {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("dates").innerHTML = days;

  var dates = getUTCDate();
  // dates.setDate(dates.getDate() + 100);
  var d = new Date(dates);

  var today, someday, text;
  today = new Date();
  someday = new Date();
  someday.setFullYear(2100, 7, 14);
  if (someday > today) {
    text = "Todat is before August 14, 2100";
  } else {
    text = "Today is after August 14, 2100.";
  }
  document.getElementById("dates").innerHTML = days;
}

function login() {
  var nameInput = document.getElementById("name").value;
  var passwordInput = document.getElementById("password").value;
  if (nameInput == "Maxim" && passwordInput == 12) {
    document.getElementById("login").innerHTML = nameInput;
  } else if (nameInput == "") {
    document.getElementById("errorName").innerHTML = "Please Enter a Name!";
  } else if (passwordInput == "") {
    document.getElementById("errorPassword").innerHTML =
      "Please Enter a Password!";
  } else {
    // document.getElementById("login").innerHTML = "Wrong Password!";
  }
  // document.getElementById('login').innerHTML = nameInput + passwordInput;
}

function arrayFunction() {
  var myNames = ["Kagheni", "Jenner", "Maximillien", "Sire", "Sad"];
  /*   var index;
  for (index = 0; index < myNames.length; index++) {
    text += myNames[index];
    document.getElementById("array").innerHTML = text;
  } */
  // myNames.unshift("Sire");
  // myNames[1] = "Sire";
  // delete myNames[0];
  // myNames.splice(1, 1);
  // myNames.reverse();
  var numbSort = [23, 43, 6, 34, 35, 64];
  var stuff = new Array("Laptop", "Disk", "Flash", 12, 54);
  var concatArray = myNames.concat(numbSort, stuff);
  numbSort.sort(function (a, b) {
    return b - a;
  });
  var sliceName = myNames.slice(2, 3);
  document.getElementById("array").innerHTML = myNames.toString();

  function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
  }
  // document.getElementById("array").innerHTML = text;

  /*   
  stuff[1] = "Disk Drive";
  myNames[1] = stuff;
  myNames[2] = Date.now;
  myNames[7] = "Sire"; */

  /*   var personObject = {
    firstName: "Kagheni",
    lastName: "Maxim",
    age: 21,
  }; */
}

function booleanFunction() {
  var tt = true / "HU";
  document.getElementById("bool").innerHTML = Boolean(tt);
}

function conditionFunction() {
  /*   hour = 13;
  if (hour < 12){
    greeting = "Good morning";
  } else if (hour < 17){
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById('cond').innerHTML = greeting; */

  if (Math.random() < 0.5) {
    text = "<a href='../index.html'>Visit W3Schools</a>";
  } else {
    text = "<a href='http://wwf.org/'>Visit WWF</a>";
  }
  document.getElementById("cond").innerHTML = text;
}

function switchFunction() {
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.getElementById("switch").innerHTML = day;

  var text;
  switch (new Date().getDay()) {
    default:
      text = "Looking forward to the Weekend";
      break;
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Todat is Sunday";
  }
  document.getElementById("switch").innerHTML = text;

  var textCase;
  switch (new Date().getDay()) {
    case 2:
    case 3:
      textCase = "The Weekend ended longtime ago";
      break;
    case 4:
    case 5:
      textCase = "Soon it is Weekend";
      break;
    case 6:
    case 0:
      textCase = "It is Weekend";
      break;
    default:
      textCase = "Looking forward to the Weekend";
  }
  document.getElementById("switch").innerHTML = textCase;

  var x = "0";
  switch (x) {
    case 0:
      textZero = "Off";
      break;
    case 1:
      textZero = "On";
      break;
    default:
      textZero = "No value found";
  }
  document.getElementById("switch").innerHTML = textZero;

  var fruit = "Apple";
  var message;
  switch (fruit) {
    case "Banana":
      message = "Hello";
      break;
    case "Apple":
      message = "Welcome";
      break;
    default:
      message = "Neither Banana or Apple";
  }
  document.getElementById("switch").innerHTML = message;
}

function forFunction() {
  var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  // var text;
  // var i;
  for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

  for (i = 0; i < 5; i++) {
    text += "The numbers is " + i + "<br>";
  }

  // var len;
  for (i = 0, len = cars.length, text = ""; i < len; ++i) {
    text += cars[i] + "<br>";
  }

  var i = 0;
  var len = cars.length;
  // var text = "";
  for (; i < len; ) {
    text += cars[i] + "<br>";
    i++;
  }

  var person = {
    fname: "Kagheni",
    lname: "Maxim",
    age: 21,
  };
  var text = "";
  var x;
  for (x in person) {
    text += person[x] + "<br>";
  }

  var txt = "JavaScript";
  for (x of txt) {
    document.write(x + "<br>");
  }
  // document.getElementById("forloop").innerHTML = text;
}

function whileFunction() {
  var i = 0;
  var text = "";
  /*   while (i < 10) {
    text += "<br>The number is " + i;
    i++;
  } */

  do {
    text += "<br>The number is " + i;
    i++;
  } while (i < 10);
  document.getElementById("whileloop").innerHTML = text;
}

function breakFunction() {
  var text = "";
/*   for (var i = 0; i < 10; i++) {
    if (i === 4) {
      continue;
    }
    text += "The number is " + i + "<br>";
  } */

  var cars = ["BMW", "Volvo", "Saab", "Ford"];
  list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
  }
  document.getElementById("break").innerHTML = text;
}
