document.write("<main>");
//Basic first excercise
document.write("<h1>Basic Excercise 1</h1><p>Output in Console</p>");

console.log("Basic Excercise 1");
console.log("Hello from the Console");

//Basic Exercise 2
document.write("<h1>Basic Excercise 2</h1>");
document.write("Hi my name is Jeremy");
    

//Basic Exercise 3
document.write("<h1>Basic Excercise 3</h1>");
var basic2 = "Hi my name is Jeremy";
var basic3 = "and I am 25 years old";
document.write(basic2 + " " + basic3);

//Basic Exercise 4
document.write("<h1>Basic Excercise 4</h1>");
var player = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
document.write("<p>The most valuable player of the match is: " + player[2] + "</p>");

//Intermediate Exercise 1
document.write("<h1>Intermediate Exercise 1</h1>");
var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
cars.sort();
document.write(cars.join(", "));

//Intermediate Exercise 2 part 1.
document.write("<h1>Intermediate Exercise 2 part 1</h1>");
var fruits = ["apple", "banana", "kiwi"];

fruits.push("orange");
document.write(fruits.join(", "));

fruits.pop("orange");
document.write("<br>" + fruits.join(", "));

//Intermediate Exercise 2 part 2.
document.write("<br><br><h1>Intermediate Exercise 2 part 2</h1>");
var animals = ["monkey", "horse", "dog"];
animals.sort();
document.write(animals.join(", ") + "<br>");
animals.unshift("cat");
document.write(animals.join(", "));

//Intermediate Exercise 3.
document.write("<h1>Intermediate Exercise 3</h1>");
var fruitsEx3 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var fruitsEx3Ar = new Array();
fruitsEx3Ar = fruitsEx3.split("/");
document.write(fruitsEx3Ar.join("<br>"));

//Advance Exercise 1. addition
document.write("<h1>Advance Exercise 1</h1><h4>Addition</h4>");
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;
c = Number(c);
d = Number(d);
var sum = a + b + c + d + e;
document.write("7 + 14 + 21 + 36 + 42 = " + sum);

//Advance Exercise 1. multiply
document.write("<br><br><h4>Multiplication</h4>");
var f = '1';
var g = 15;
var h = 8;
var i = "1";
f = Number(f);
i = Number(i);
var multiply = f * g * h * i;
document.write("1 * 15 * 8 * 1 = " + multiply);

//Advance Exercise 1. division
document.write("<br><br><h4>division</h4>");
document.write("120 : 120 = " + sum / multiply);

//Advance Exercise 2. 
document.write("<h1>Advance Exercise 2.</h1>");
var selection = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];

document.write(selection[1][1] +  ", " + selection[4][2] +  ", " + selection[5][3] +  ", " + selection[2][3] +  ", " + selection[2][1]);

//Advance Exercise 3. 
document.write("<h1>Advance Exercise 3.</h1>");

var sentence = "With the online map of Vienna you can easily navigate through Vienna.";
var vienna1 = new Array();
vienna1 = sentence.match(/Vienna/g);
document.write(vienna1[0] + "<br>");
document.write(vienna1[1]);


//Challenge 1. Multidimensional Arrays
document.write("<h1>Challenge 1. Multidimensional Arrays</h1>");
var viennaNice = [["Vienna"],["is"], ["a"], ["nice"], ["city"]];
document.write(viennaNice[0][0]);
document.write("<p style='margin-left:2em;'>" + viennaNice[1][0] + "</p>");
document.write("<p style='margin-left:3em;'>" + viennaNice[2][0] + "</p>");
document.write("<p style='margin-left:4em;'>" + viennaNice[3][0] + "</p>");
document.write("<p style='margin-left:5em;'>" + viennaNice[4][0] + "</p>");

//Challenge 2. String Manipulation
document.write("<h1>Challenge 2. String Manipulation</h1>");
var sentenceChallenge2 = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as\"properties $flow$down;$actions$flow$up\"";
document.write(sentenceChallenge2.replace(/[$]/g, " "));

document.write("</main>");