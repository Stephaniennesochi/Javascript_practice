document.write("Hello World!");
console.log("Hello World!");

document.write(" I'm currently learning Javascript")
var a;
console.log( typeof a)

var a = 3;
console.log( typeof a)

var a = "Math"
console.log( typeof a)

var a = true
console.log( typeof a)

var a = null
console.log( typeof a)

var a = ["Math", "Math", "Math", "Math", "Math"];
console.log( typeof a)
console.log( a.length)

var p = ["English", "French", "Igbo", "Spanish", "German", "Italian"]
console.log( typeof p)
console.log( p.length)

var a = [3,4,5,6,7]
console.log( typeof a)
console.log( a.length)

var a = new Array("a", "b", "c", "d", "e", "f", "g");
console.log( typeof a)
console.log( a.length)

var b = new Array("i", "ii", "iii", "iv", "v", "vi", "vii");
console.log( typeof b)
console.log( b.length)

var a = 2 + 5
console.log(a)
console.log(typeof a)

var p;
p = 24 + "24"
console.log(p)

var f;
f = 64 + "24"
console.log(f)

var b;
b = 15 + 15;
console.log(b)

var b;
b = 30 - 20;
console.log(b)

var b;
b = 30 / 15;
console.log(b)

var b;
b = 50 * 2;
console.log(b)

var b =30;
b++;
console.log(b)

var a = "Stephanie" + 24
console.log(a)
console.log(typeof a)

var a = "hi" + " steph"
console.log(a)
console.log(typeof a)

var p;
p = ("I'm Stephanie, " + 20 +"years old," + " my Reg no is GOU/U21/CSC/690")
console.log(p)

let colors = ["White ", "Black" , "Red" ,"Green", "Orange", "Purple", "Yellow", "Blue"]
console.log(colors)
console.log(colors.length)

var f = 24;
age = f + 6
console.log(age)

var f = age + 15;
f = 12;
age = f++
console.log(f)

var f;
b = 20
f = b + b;
console.log(f)

var p;
k = 20;
k++;
p = k + k;
console.log(p)

var f = 55 * 5 / 5 + 5
console.log(f)

var p = 4;
p++;
console.log(p)

var f = 6*6;
p = f + 7 - 9;
console.log(p)

var b = 5-5+1;
console.log(b)

var d;
var h;
d=25;
h=35
k= d + h + 10;
console.log(k)

var w, k, r;
w = 10, k = 3, r = 55;
d = w+k-r
console.log(d)

var h;
h= 34;
r = h + 124;
console.log(r)

var r = 24;
r++;
console.log(r)

console.log("I love God")
console.log("My Favourite meal is Spagetti")


var animals =["ram", "goat", "pig", "cow", "monkey", "chicken"]
console.log(animals)
console.log(typeof animals)
console.log(animals.length)

console.log('Javascript is a scripting language')
console.log("Javascript framework(React) is available")

var f = 200 + 150;
f = 20;
f++;
console.log(f)

console.log("My Project")

// This is a single line comment //

/* This 
    is 
    a Multi-line 
    comment 
*/

var strName ="10"
console.log(parseInt(strName))

var strName2 = "11.9"
console.log(parseInt(strName2))

var strName3 = "Banana"
console.log(parseInt(strName3))

var num = 100
console.log(toString(num))

var num1 = 100.99999
console.log(toString(num1))

var floatName ="12"
console.log(parseFloat(floatName))

var floatName1 ="13.3"
console.log(parseFloat(floatName1))

var num_1 = 189.94969
console.log(num_1.toFixed(2))

var num_1 = 189.94969
console.log(num_1.toFixed())

var num_1 = 10
console.log(num_1.toFixed(2))


var num_1 = 10
console.log(num_1.toFixed(2))


console.log(0/0)
console.log(0/5)
console.log("a" * 3)
console.log(3 * "a")
console.log("b" + 4)
console.log(4 + "b")
console.log("c" - 5)
console.log(5 - "c")

var mStr = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun."
console.log(mStr.length)

var myFirstStr = "This is my test string to practice the JavaScript string function concepts."
console.log(myFirstStr.length)
console.log(myFirstStr.indexOf("This"))
console.log(myFirstStr.lastIndexOf("This"))

var mySecondStr ="This is gonna be fun."
console.log(mySecondStr.length)

console.log(mStr.slice(0, 75))
console.log(mStr.slice(8))
console.log(mStr.slice(-7))
console.log(mStr.substring(0, 15))
console.log(mStr.substring(-0, 15))
console.log(mStr.substring(0))


var str1 = "Today is "
var str2 = "A beautiful day "
var str3 = "In Hawaii "

console.log(str1.concat(str2.toLowerCase().concat(str3.toLowerCase())) )

var mystr = "Mo, Tu, Wed, Thu, Fri, Sat, Sun"
console.log(mystr.toUpperCase().split("['']"))

var mNum;
console.log(mNum)

var mNum = null
console.log(mNum)

console.log(undefined == null)
console.log(undefined === null)

var length = 400;
var breadth = 200;

if (length === breadth){
    console.log("This is a square")
} else{
    console.log("This is a rectangle")
}

var num1=8, num2=24, num3=6;

if (num1 > num2){
    console.log(num1)
} 
else if( num2 > num3){
    console.log(num2)
}
else {
    console.log(num3)
}

var enteredMarks = 80

if(enteredMarks < 25){
    console.log("Grade : F") 
} else if (enteredMarks >= 25 && enteredMarks  < 45){
    console.log("Grade : E")
}
else if (enteredMarks >= 45 && enteredMarks < 50){
    console.log("Grade : D")
}
else if (enteredMarks >= 50 && enteredMarks  < 60){
    console.log("Grade : C")
}
else if (enteredMarks >= 60 && enteredMarks  < 80){
    console.log("Grade : B")
}
else if (enteredMarks >= 80){
    console.log("Grade : A")
}


var numberOfItemPurchased = 90
var cost = numberOfItemPurchased *100
var discount = 1/10

if (numberOfItemPurchased < 10){
    console.log ("Customer is off discount sales")
}
else {
    console.log( discount * cost )
}

var monthNumber = 2;

switch(monthNumber){
    case 1:
        console.log("January")
        console.log("Total number of days = 31")
        break;
    case 2:
        console.log("Feburary")
        console.log("Total number of days = 28")
        break;
    case 3: 
        console.log("March")
        console.log("Total number of days = 31")
        break;
    case 4:
        console.log("April")
        console.log("Total number of days = 30")
        break;
    case 5:
        console.log("May")
        console.log("Total number of days = 31")
        break;
    case 6: 
        console.log("June")
        console.log("Total number of days = 30")
        break;
    case 7:
        console.log("July")
        console.log("Total number of days = 31")
        break;
    case 8:
        console.log("August")
        console.log("Total number of days = 31")
        break;
    case 9: 
        console.log("September")
        console.log("Total number of days = 30")
        break;
    case 10:
        console.log("October")
        console.log("Total number of days = 31")
        break;
    case 11:
        console.log("November")
        console.log("Total number of days = 30")
        break;
    case 12: 
        console.log("December")
        console.log("Total number of days = 31")
        break;
}

var num1 = 1 + 5;
var num2 = num1 / 4;
var num3 = 1 + 5;
var num4 = num3 / 4;
console.log(num2 + " " + num4);

var a = 1;
var b = 2;
var c;
var d;
c = ++b; 
console.log(c)
console.log(b)
d = a++; 
console.log(a)
console.log(d)
c++; 
console.log(c)
b++; 
console.log(b)
++a; 
console.log(a)
console.log(a + " " + b + " " + c);

var x = 0;
x++;
console.log(x)
x = x + 1;
console.log(x)
x += 1;
console.log(x)

var p = 1;
p--;
console.log(p)
p = p - 1;
console.log(p)
p -= 1;
console.log(p)


var num = 100;
num += 5 * 10 / 2;
console.log(num)

var num = 100;
num *= 2 * 10 / 5;
console.log(num)

var num = 100;
num /= 2 * 8 - 15;
console.log(num)


var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;
d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
console.log(d);

if (d == 1){
console.log((a * (c - b) / e + (b + c)));
} else {
console.log((e * (c + a) / (b + c) + a));
}

console.log(true + false)
console.log(12 / "6")
console.log("number" + 15 + 3)
console.log(15 + 3 + "number")
console.log(1 > null)
console.log("foo" + + "bar")
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!"false" == !!"true")


var myString = "I am a lovely girl"
console.log(myString.lastIndexOf())
mystr = myString.substring().toUpperCase(1)
console.log(mystr)


myNum = 24
console.log(Number(myNum), (typeof(myNum)))
console.log(String("2"), (typeof("2")))
console.log(Boolean(true), (typeof(true)))

myString = "Daily"
console.log(String(myString), typeof(myString))
console.log(Number(myString), typeof(myString))
console.log(Boolean(myString), typeof(myString))
console.log(myString.length)
console.log(myString.indexOf(2))

myBoolean ="true"
console.log(Boolean(myBoolean), typeof(myBoolean))
console.log(Number(myBoolean), (typeof(myBoolean)))
console.log(String(myBoolean), (typeof(myBoolean)))

myBoolean = false
console.log(Boolean(myBoolean), typeof(myBoolean))
console.log(Number(myBoolean), (typeof(myBoolean)))
console.log(String(myBoolean), (typeof(myBoolean)))

myVar = 25 + "real"
console.log(myVar)
console.log(typeof(myVar))

myVar = 25
console.log(myVar)
console.log(typeof(myVar))

yVar = "real"
console.log(myVar)
console.log(typeof(myVar))


var currentDay = "Monday"
switch(currentDay){

    case "Sunday":
        console.log("Today is Sunday")
        break;
    case "Monday":
        console.log("Today is Monday")
        break;
    case "Tuesday":
        console.log("Today is Tuesday")
        break;
    case "Wednesday":
        console.log("Today is Wednesday")
        break;
    case "Thursday":
        console.log("Today is Thursday")
        break;
    case "Friday":
        console.log("Today is Friday")
        break;
    case "Saturday":
        console.log("Today is Saturday")
}

console.log("I LOVE MY MOM")

 var str = 'My Message'
 console.log(str)
 console.log(str.length)
 console.log(str.split(","))
console.log(str.toUpperCase(1))
console.log(str.toLowerCase(1))
console.log(str.charAt(4))
console.log(str.substring(3))
console.log(str.trim(-6))
console.log(parseFloat(str))
console.log(parseInt(str))

var number1 = 24

if (num >= 0){
console.log("postive number")}
else
console.log("Negative number")




let currentAmount = 100; 
let depositValue = prompt('Enter amount to deposit:')
console.log(depositValue)
currentAmount += parseInt(depositValue)
console.log(currentAmount)

let withdrawalValue = prompt('Enter amount to withdraw:')
//console.log(withdrawalValue)
currentAmount -= parseInt(withdrawalValue)
console.log(currentAmount)


var discount = 0.1;
numberOfItemPurchased = prompt("Enter number of items purchased:")
amountOfEachItem = 200;
if (numberOfItemPurchased > 10){
console.log(numberOfItemPurchased * amountOfEachItem * discount)}
else{
console.log(numberOfItemPurchased * amountOfEachItem)
}

var percentage = 0.07;
amount = 49
let total = percentage * amount
console.log(total)

var places = 3;
var transport = 1500;
transportPerPlace = places * transport;
console.log(transportPerPlace)

var a =+ b++
var b = 24
console.log(a)

var i= 10
i++;
console.log(i)

var p = 12
p++;
console.log(p)
var a = 25;
console.log(a)
a += 15
console.log(a)
a -= 16
console.log(a)
a *= 5
console.log(a)
a /= 5
console.log(a)

var strNum = 'Steph' + 24;
console.log(strNum)

var stack
stack = 64 + "First" + true + null;
console.log(stack)

let petVe = "Analyze" 
console.log(parseInt(petVe))

let theNum = 1000.59089
console.log(parseFloat(theNum))
console.log(theNum.toFixed(1))

let race = "Sophia"
console.log(race)
console.log(race.toUpperCase())
console.log(race.split(""))
console.log(race.indexOf(3))
console.log(race.substring(5))
console.log(race.toLowerCase())
console.log(race.slice(1, -1))