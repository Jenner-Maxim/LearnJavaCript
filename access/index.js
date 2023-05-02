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
