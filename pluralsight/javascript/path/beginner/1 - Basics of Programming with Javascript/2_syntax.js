/* Operators
There is a bunch of Operators
There are a lot of ways to accomplish the same, with some shortcut Operators
example
a = a + 2 // easier to read? - readibility
a += 2 // more straight forward - understandability

Which one do you prefer? it is all subjective

== check if something is equal
=== what is the difference between these two later
*/

/* Values and Types
42 // number
"42" // string
Are they the same? not, because they are of different type

You can access string as array for example "42"[0] // "4"

There is no difference between single quote and double quote
key take away is to do not mix. Pick one and stick to it.

I prefer double quotes.

It is not conversion is coercion
a = 42
a = a / 2;

Explicit conversion
Number to string
a = String(a);

String to a number
b = Number(a);

Variables do not have type, it can have any value.
The value has a type.

Other languages declare the type to the variable not the value. This is an
interesting disctintion

Implicit conversion
a = 21;
a = a + ""; // it converts the number to a string implicintly
console.log(a);

There is notion in ES6 to specify the type that can;t be change.
*/

/* Comments
A way to make the code more understandable. for you or some other developer
The instructor says that the comment says why, or how, not the what. the what
is being told by the code. I disagree sometimes it is better to give a higlhlight
of what the code is doing, specially for a complex algorightm.
*/

/* Variables and Blocks
What happens when i put var instead of empty
a = 42; not formally declared. It is suggested to declare the variables before
being used.

It is recommended formally declare
var
let // in ES6
const // in ES6
scoping delcaration, for further reading and training.

function a() {}

Again we want to always declare variables and functions.

Ok but what is hoisting: In JavaScript, a variable can be declared after it has
been used. That's what it refers to with the term hoisting. move one

What is the difference var vs let. This is more advanced.

Blocks
used to group of collection of statements.

Standalone block
{
   var a = 42;
   foo( a /42);
}

Attach a block to a statement like while, if, for, etc. or functions

Comment about how to place curly braces in the same line. I prefer whatever
the team agrees on.

Basically the block can be attached to an statement.

Ways to declare functions:

1 - function foo() {}

2 - var foo =  function() {} // functions expressions attached to variables
3 - var foo = functions baz() {}

The take away here is that in all three, the block is associated to a function
*/

/* Conditional statements
var a = 10;
if (a){ // what happens here? gets converted to true all false
  THIS IS TRUE
}

Falsey Values:
0 -0 NaN
""
false
null
undefinded

Truthy, if it is not i nthe list it is trusthy

void 42 give you undefined
*/

/* Loops
while( a > 10) {

}

initialization clause
test or conditional clause
update clause
for (a = 5; a < 10; a++){
  console.log(a)
}

for(;;){ // it is a runs for ever
  there is no condition that fails, that tells it to stop the loop
}


This is how a loop works, this is not the recommendation on how a loop works
a = 5;
while(true){
  it runs for ever
    if (a >= 10) {
      break;
    }
    console.log(a);
    a++;
}
*/

/* Functions
Logically group statements but you can reuse
usually to regroup functionality that we can call from different places

var a = 3.1415926
a.toFixed(3); // rounded to a fixed decimals, for dollars usefull for
formating US dollars

functions hello(){
  a = a * 2;
  a = a + 3;
}

Functions can also receive parameters, that becomes accessible in the body
of the body.

Passing an argument
in the function are the parameters when you declare

You can pass a function as parameters
function bar() {}
foo(bar)

Functions can also return values
*/

/* Scope
Variables are scoped depending on where they are declared
You can always access variables that are outside.
*/

/* ECMAScript 6
The standard is happenning.
Transpilers, converts ES6 to run in older browsers
Babel is a transpilers.

It is suggested to write in the latest, and then in a build step, transpile into
an older with a transpiler

There are other transpilers, but Babel is a good place to start

If you want to play around without the build step
ES6 Fiddle http://www.es6fiddle.net
*/
