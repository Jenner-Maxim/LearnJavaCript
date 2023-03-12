function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Maxim");

/* var x = 10;
var y = 20; */

/* let x = 10;
let y = 20;

function add(a, b) {
  return a + b;
}

let result = add(x, y);
console.log(result); */

/* let a = 20, b = 0;

function divide(a, b){
    if(b == 0){
        throw new Exception('Division by Zero');
    }
    return a / b;
}

let result = divide(a, b);
console.log(result); */

/* let items = [10, 20, 30];
console.log(items.length);

for(let i = 0; i < items.length; i++){
    console.log(i);
}

for(let item of items){
    console.log(item)
} */

/* function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}
let john = new Person('John', 'Mark');
let fullName = john.getFullName();
console.log(fullName); */

/* class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
let john = new Person('John', 'Mark');
let max = new Person('Jenner', 'Maxim');
let fullName = [john.getFullName(), max.getFullName()];

console.log(fullName); */
/* var a = 10;
var b = 20;
if (a > b) {
    console.log('a is greater than b');
    return 1;
}
else{
    console.log('b is greater than a');
} */

/* var message;
console.log(message);
console.log(counter); */
/* var message = "Hello";
function say(){
    var message = "Hi";
    console.log(message);
}
say();
console.log(message); */
/* "use strict";
function say(){
    message = 'Hi';
    console.log(message);
}
say();
console.log(message); */
/* var counter;
var counter;
counter = 100;
console.log(counter); */

/* var a = 20, b = 10;
{
    let tmp = a;
    a = b;
    b = tmp;
}
console.log(tmp); */

/* const pi = 3.14;
pi = 3.141; */

/* let counter = 120;
console.log(typeof(counter));
counter = false;
console.log(typeof(counter));
counter = 'Hi';
console.log(typeof(counter)); */

/* let counter;
console.log(counter);
console.log(typeof(counter));
console.log(typeof undeclareVar); */

/* let obj = null;
console.log(typeof obj);
if (obj != null){
    console.log("Null Data Type");
}
console.log(null == undefined); */

/* let o = 0o56;
let h = 0xF;
console.log(o, h); */

/* let a = 43;
let b = 84;
let c = a + b;
console.log(c); */

/* let f3 = 0.002;
console.log(f3);
let f4 = 2.17e6;
console.log(f4); */

/* console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);
console.log(Number.MIN_VALUE + Number.MIN_VALUE);
console.log(Number.MIN_VALUE - Number.MIN_VALUE);
console.log(Number.MAX_VALUE - Number.MIN_VALUE);

console.log('a'/2);
console.log(NaN/2);
console.log(NaN == NaN); */

/* let greeting = 'Hi';
let s = "It's a valid string";
let str = 'I\'m also a string';
str = str + ' String' */

/* str = 'Javascript';
str = str + ' String'
console.log(str);

let in_progress = true;
let completed = false;
console.log(typeof completed);

console.log(Boolean('Hi'));
console.log(Boolean(''));
console.log(Boolean(20));
console.log(Boolean(Infinity));
console.log(Boolean(0))
console.log(Boolean({foo: 100}));
console.log(Boolean(null));

console.log(Symbol() == Symbol()); */

/* let s2 = Symbol('event.save');
console.log(s2.toString());
const click = Symbol('click');
console.log(click); */

/* let emptyObject = {};
let person = {
    first_name: 'John',
    last_name: 'Mark'
};
let contact = {
    first_name: 'John',
    last_name: 'Mark',
    email: 'johnmark@gmail.com',
    phone: +256740639860,
    address: {
        buiding: 4000,
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
console.log(contact.address);
console.log(contact['email']);

let customer = new Object();
customer.name = 'Maxim';
customer.age = 21;
console.log(customer); */

/* var number_object = new Number(100);
console.log(number_object.valueOf());

var a_number = new Number(10);
console.log(a_number.toString());
console.log(a_number.toString(2));
let x = 10;
console.log(x.toString(16));

var y = 23.877;
console.log(y.toFixed(2));

var distance = 19.006;
console.log(distance.toFixed(2));
distance = 19.004;
console.log(distance.toFixed(2)); */

/* var y = 10000000, z = 1000;
console.log(y.toExponential());
console.log(z.toExponential());

var a = 43.8922;
console.log(a.toPrecision(2));

var x = 9.12345;
console.log(x.toPrecision());
console.log(x.toPrecision(4));
console.log(x.toPrecision(3));
console.log(x.toPrecision(2));
console.log(x.toPrecision(1));

x = 1234.567;
console.log(x.toPrecision(2)); */

/* let number_object = new Number(10);
let number = 10;
console.log(typeof number_object);
console.log(typeof number);
console.log(number_object instanceof Number);
console.log(number instanceof Number); */

/* let is_pending = false;
let is_done = true;
console.log(typeof is_pending);
console.log(typeof is_done);

let a = Boolean('Hi');
console.log(a);
console.log(typeof a);

let b = new Boolean(false);
console.log(b);
console.log(typeof b);
console.log(b.valueOf());
console.log(b.toString());

let foo = true;
let bar = new Boolean(false);
bar.primitiveValue = bar.valueOf();
console.log(bar.primitiveValue);
foo.name = 'primitive';
console.log(foo.name);
console.log(typeof foo);
console.log(typeof bar);
console.log(foo instanceof Boolean);
console.log(bar instanceof Boolean);

let false_obj = new Boolean(false);
if (false_obj) {
    console.log('Weird part of the Boolean object');
}
var c = false;
if (c) {
    console.log("The is the try");
} */

/* let a = 10;
a =+ a;
console.log(a);
a =-a;
console.log(a);
s = '10';
console.log(+s);
let f = false, t = true;
console.log(+f);
console.log(+t);

let product = {
    valueOf: function(){
        return 60;
    }
};
console.log(+product);
let dan = 8;
++dan;
console.log(dan); */

/* var dan = 8;
dan = dan + 1;
console.log(dan);

let x = 10, y = 20;
let z = --x + y;
console.log(z);

let i = 10, j = 20;
let m = i++ + j;
console.log(m);
console.log(i);

i = 10;
let n = ++i + j;
console.log(n);
console.log(i);

var a = true;
var b = false;
a = ++a;
b = ++b;
// console.log(a++, b++);
console.log(a + b);

var c = 'Hi';
console.log(++c); */

/* let a = 10;
a += 5;
b = a;
a += b;
a *=b;
a /= b;
a &= b;
a |= b;
a = 43;
b = 7;
a ^= b;
a <<= b;
a >>= b;
a >>>= b;
a = 5;
b = 3;
a >>>= b;
console.log(a); */

/* let r1 = 20 > 10;
let r2 = 20 < 10;
let r3 = 10 == 10;
console.log(r1, r2, r3);

let a = 10, b = 20;
console.log(a >= b);
console.log(a == 10);

let name1 = 'boice', name2 = 'bob';
let result = name1 > name2;
console.log(result);
console.log(name1 == 'alice');

let c = 45;
let res = name1 == c;
console.log(res); */

/* let f1 = 'apple', f2 = 'Banana';
let f3 = 'alice', f4 = 'bob';
let result = f2.toLowerCase < f1.toLowerCase;
let result2 = f3 < f4;
console.log(result, result2);
console.log(10 > '20'); */

/* let apple = {
    valueOf: function(){
        return 10;
    }
};

let orange = {
    toString: function(){
        return 20;
    }
};
console.log(apple > 10);
console.log(orange == 20);
console.log(apple < orange);

console.log(true > 0);
console.log(false < 1);
console.log(true > false);
console.log(false > true);
console.log(true >= true);
console.log(true <= true);
console.log(false <= false);
console.log(false >= false); */

/* console.log(null == undefined);
console.log(NaN == 1);
console.log(NaN == NaN);
console.log(NaN != NaN);
console.log(NaN != 3);
console.log("10" == 10);
console.log("10" === 10); */

/* let eligible = false, required = true;
console.log(!eligible);
console.log(!required);

var a = "";
console.log(!a); */

/* console.log(!undefined);
console.log(!null);
console.log(!20);
console.log(!0);
console.log(!NaN);
console.log(!{});
console.log(!'');
console.log(!'OK');
console.log(!false);
console.log(!true);

let counter = 10;
console.log(!!counter); */

/* var a = 1, b = true;
let result = a && b;
console.log(result);

let c = false;
let result2 = c && (1 / 0);
console.log(result2);

let eligible = true, required = false;
console.log(eligible || required); */

/* const a = 5, b = 2, c = 'hello';
console.log(a == 5);
console.log(b == '2');
console.log(c == 'Hello'); */

/* const a = 3, b = 'hello';
console.log(a != 2);
console.log(b != 'Hello'); */

/* const a = 2;
console.log(a === 2);
console.log(a === '2');

const b = 'hello';
console.log(a !== 2);
console.log(a !== '2');
console.log(b !== 'Hello'); */

/* const a = 3;
console.log(a > 3);
console.log(a >= 3);

const b = 2;
console.log(a < 2);
console.log(b < 3); */

/* const a = 2;
console.log(a <= 3);
console.log(a <= 2); */

/* const a = true, b = false;
const c = 4;
console.log(a && a);
console.log(a && b);
console.log((c > 2) && (c < 2));

console.log(a || b);
console.log(b || b);
console.log((c > 2) || (c < 2));

console.log(!a);
console.log(!b); */

// const number = prompt("Enter a number: ");
/* const number = 0;
if (number >= 0)
    if (number == 0)
        console.log("The number is 0");
    else
        console.log("The number is positive");
else
    console.log("The number is negative"); */

/* let sum = 0;
const n = 100; */
/* for (let i = 1; i <= n; i++){
    console.log("I love JavaScript");
}

for (let i = 1; i <= n; i++){
    sum += i;
}
console.log(sum); */

/* for (let i = n; i >= 1; i--){
    sum += i;
}
console.log('Sum: ', sum);

for (let i = 1; i > 0; i++){
    console.log(i);
} */

/* let i = 1, n = 5;
while(i <= n){
    console.log(i);
    i += 1;
} */

/* let sum = 0;
let number = parseInt(23);

while(number >= 0){
    sum += number;
    number = parseInt(45);
}
console.log("The sum is ${sum}"); */
/* let i = 1;
const n = 5;
do{
    console.log(i);
    i++;
} while(i <= n);

let sum = 0;
let number = 0;

do{
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)
console.log(`The sum is ${sum}`); */

/* for (i = 1; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i);
} */

/* let sum = 0, number;
while(true){
    number = parseInt(prompt('Enter a number: '));
    if (number < 0){
        break;
    }
    sum += number;
}
console.log(`The sum is ${sum}`); */

/* for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 3; j++){
        if (i == 2){
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
} */

/* for (let i = 1; i <= 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i);
} */

/* let sum = 0;
let number = 0;

while(number >= 0){
    sum += number;
    number = parseInt(prompt('Enter a number: '));

    if(isNaN(number)){
        console.log('You entered a string.');
        number = 0;
        continue;
    }
}
console.log(`The sum is ${sum}`); */

/* for (let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        if (j == 2){
            continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
} */

/* let a = "1";
switch (a) {
    case "1":
        a = 1;
        break;
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`); */

/* let fruit = prompt("Enter a fruit: ");
switch (fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit`);
        break;
    default:
        console.log(`${fruit} is not a fruit`);
        break;
} */

/* let greeting = "Hello";
let name = 'John';
let message = `Hello ${name}`;
console.log(message);

let str = "Good Morning!";
console.log(str.length); */

/* let str = "Hello";
console.log(str[str.length -1]); */

/* let name = 'John';
let str = 'Hello ' + name;
console.log(str);

let className = 'btn';
className += ' btn-primary';
className += ' none';
console.log(className); */

/* let status = false;
let str = status.toString();
let back = Boolean(str);
console.log(typeof(status), typeof(str), typeof(back));
console.log(status, str, back);

let result = 'y' < 'Z';
console.log(result); */

/* let str = new String('JavaScript String Type');
console.log(str.length);
console.log(str);
console.log(str.valueOf());
console.log(str.toString());
console.log(str.toLocaleString());
console.log(str[0]);
console.log(str.charAt(0));
console.log('literal string'.toUpperCase());

let first_name = 'John';
let fullName = first_name.concat(' ', 'Mark');
let full_name = first_name + ' ' + 'Mark';
console.log(fullName);
console.log(first_name);
console.log(full_name); */

/* let str = "JavaScript String";
console.log(str.substr(0, 10));
console.log(str.substr(11, 6));
console.log(str.substring(4, 10)); */

/* let str = "This is a string";
console.log(str.indexOf('is'));
console.log(str.indexOf("is", 3));
console.log(str.lastIndexOf('is'));
console.log(str.lastIndexOf('are'));

let rawString = ' Hi there ';
let strippedString = rawString.trim();
let strippedStart = rawString.trimStart();
let strippedEnd = rawString.trimEnd();
console.log(strippedString);
console.log(rawString);

let greeting = 'Hello';
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());
console.log(greeting.toLocaleLowerCase());
console.log(greeting.toLocaleUpperCase());

console.log('A'.localeCompare('B'));
console.log('B'.localeCompare('B'));
console.log('C'.localeCompare('B')); */

/* let expr = "1 + 2 = 3";
let matches = expr.match(/\d+/g);
matches.forEach(function(m){
    console.log(m);
});

let str = "This is a test of search()";
let pos = str.search(/is/);
console.log(pos); */

/* let str = "the baby kicks the ball";
let newstr = str.replace('kicks', "holds");
console.log(newstr);
console.log(str);

let resultString = str.trim(); */

/* let str = ' JS trim ';
let result = str.trim();
console.log(result);

let newstring = originalString.trimStart(); */

/* const str = ' JavaScript ';
const result = str.trimStart();
console.log({ result });
console.log({ str }); */

// let newstring = originalString.trimEnd();

/* const str = ' JavaScript ';
const result = str.trimEnd();
console.log({ result });
console.log({ str }); */

/* let str = '1234'.padStart(8, '0');
console.log(str); */

/* let str = 'abc'.padEnd(5);
console.log(str);
str = 'abc'.padEnd(5, '*');
console.log(str);
str = 'abc'.padEnd(5, 'def');
console.log(str);

let greeting = 'Hi';
let message = greeting.concat(' ', 'John');
console.log(message);

let colors = ['Blue', ' ', 'Green', ' ', 'Teal'];
let result = ''.concat(...colors);
console.log(result);
console.log(colors); */

/* let str = 'Maxim'.concat(123);
console.log(str);

let con = "Maxim";
con += " Jenner";
console.log(con); */

/* let str = 'JavaScript String split';
let substrings = str.split(' ',2);
console.log(substrings);

let paragraph = 'Good Morning! How are you? This is John. John is my friend';
let sentences = paragraph.split(/([!,?,.])/);
console.log(sentences); */

/* let str = 'finding substring in string';
let index = str.indexOf('str');
console.log(index); */

/* let str = 'You do not know what you do not know until you know';
let substr = 'know';
let count = 0;
let index = str.indexOf(substr);
while(index !== -1){
    count++;
    index = str.indexOf(substr, index + 1);
}
console.log(count); */

/* let str = 'JS indexOf';
let substr = 'js';
let index = str.indexOf(substr);
console.log(index); */

/* let str = 'JS indexOf';
let substr = 'js';
let index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());
console.log(index); */

/* let str = 'JavaScript';
let index = str.lastIndexOf('a', 2);
console.log(index); */

/* let str = 'Hello, World';
let substr = 'L';
let index = str.toLocaleLowerCase().lastIndexOf(substr.toLocaleLowerCase());
console.log(index); */

/* let str = 'JavaScript Substring';
let substring = str.substring(11);
console.log(substring);

let email = 'john.doe@gmail.com';
let domain = email.substring(email.indexOf('@') + 1);
console.log(domain); */

/* let email = 'john@exemple.com';
let localPart = email.slice(0, email.indexOf('@'));
console.log(localPart); */

let email = 'admin@example.com';
var check = email.includes('@');
if(check == true){
    console.log('You can login');
}
else{
    console.log('Wrong email');
}
let str = 'JavaScript String';
console.log(str.includes('Script', 5));