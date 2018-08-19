## ECMAScript 6

> Why ES6 in the first place? Wasn't ES5 enough? Lets look at the benefits

- ES6 language design is clearer than ES5
- ES6 reduces boilerplate code Ex: `function VS arrow syntax`

> Cool..Lets get started

---

### Topics

- [Block scope](#block-scope)
- [Arrow function](#arrow-function)
- [Template literals](#template-literals)
- [Property shorthand](#property-shorthand)
- [Object literals](#object-literals)
- [Object destructuring](#object-destructuring)
- [async...await](#async-await)
- [Default value arguments](#default-value-arguments)
- [Currying](#currying)
- [Higher Order Function](#higher-order-function)

---

### Block scope

Before ES6 JS had no way to support block level scope. Now we have.

- **var** which defines function level scope
- **let** which defines Block level scope

```Javascript
var a = 20

if(a > 10) {
  let b = 1
  let a = 2
  console.log(b,a, 'Inner Scope')   // 1 2 Inner Scope
}

console.log(a, 'Outer Scope')   // 20 Outer Scope
```

[Go to Index](#topics)

---

### Arrow function

Putting fun around functions :wink:

Before

```Javascript
function sayHello() {
  return 'Hello Guys!!'
}
```

After

```Javascript
let sayHello = () => 'Hello Guys!!'
```

Note: speaker notes FTW!

[Go to Index](#topics)

---

### Template literals

Use **back tick(`)** instead of single quote or double quote

- Multi Line Strings
- Expression Interpolation

[Go to Index](#topics)

---

#### Multi Line Strings

Before

```Javascript
console.log('string text line 1\n' +
'string text line 2');
```

After

```Javascript
console.log(`string text line 1
string text line 2`);
```

[Go to Index](#topics)

---

#### Expression Interpolation

Before

```Javascript
var a = 5;
var b = 10;
console.log('The sum of a & b is ' + (a + b) + '.');
```

After

```Javascript
var a = 5, b = 10
console.log(`The sum of a & b is ${a + b}`)
```

[Go to Index](#topics)

---

### Property Shorthand

Before

```Javascript
var name = 'Arwa Lokhandwala';
var obj = {
  name: name,
}
console.log(obj)
```

After

```Javascript
var name = 'Arwa Lokhandwala'
var obj = {
  name
}
console.log(obj)
```

[Go to Index](#topics)

---

### Object Literals

- Shorthand for writing Methods
- Computed Properties

[Go to Index](#topics)

---

#### Shorthand for writing Methods

Before

```Javascript
var obj = {
  add : function(a,b) {
    return a+b
  }
}
```

After

```Javascript
var obj = {
  add(a,b) {
    return a+b
  }
}
```

[Go to Index](#topics)

---

#### Computed Properties

Example

```Javascript
var i = 0
var fruits = {
  [`fruit ${++i}`] : 'Apple',
  [`fruit ${++i}`] : 'Mango'
}
```

[Go to Index](#topics)

---

### Object Destructuring

Quickly extract values from objects and arrays

Example 1 (With Objects)

```Javascript
let animal = { type: 'dog', sound: 'woof', paws: 4 };
let {name, sound, paws} = animal;
console.log(sound, name); /// "woof undefined"
```

[Go to Index](#topics)

---

Example 2 (With Arrays)

```Javascript
let [n1, n2, n3, n4, ...r] = [100, 'three', 34, {number: 23}, 694, 'eighteen'];
console.log(n1, n2, n3, n4); // "100 'three' 34 { number: 23 }"
console.log(r); // "[ 694, 'eighteen' ]"
```

[Go to Index](#topics)

---

Example 3 (Nested Objects)

```Javascript
var details = {
  name: 'Arwa Lokhandwala',
  address: {
    areaName: 'Santacruz',
    pincode: '400055'
  }
}

let {address: {pincode: pincode}} = details
console.log(pincode) //400055
```

[Go to Index](#topics)

---

Example 4

```Javascript
var fruits = ['Apple','Mango','Orange','Kiwi']

let [,,,fruit] = fruits
console.log(fruit)
```

[Go to Index](#topics)

---

### Async Await

Example

```Javascript
var promise = new Promise((resolve,reject) => {
  resolve('ARWA LOKHANDWALA')
})
async function getDetails() {
    console.log("Getting Details")
    let details = await promise
    console.info(details)
    console.log('Done')
}

getDetails()
```

[Go to Index](#topics)

[Know More Here](https://javascript.info/async-await)

---

### Default Value Arguments

Example

```Javascript
function greet(name = 'Anon', callback = function(){}) {
  console.log(`Hello ${name}!`);

  // No more "callback && callback()" (no conditional)
  callback();
}
```

[Go to Index](#topics)

---

### Currying

> Currying helps you breakdown function that takes many arguments into a series of functions that takes one argument at a time.

Before

```Javascript
function sum(a,b) {
  return a+b
}
```

[Go to Index](#topics)

---

After

```Javascript
function curriedSum(a) {
  return function(b){
    return a*b
  }
}
```

[Go to Index](#topics)

---

You can also write it like this:

```Javascript
let curriedSum = a => b => a+b
```

[Go to Index](#topics)

---

### Higher Order Function

> Higher Order Function is a function that either takes one or more functions as arguments or returns a function as its result or both.

---

```Javascript
const calculator = (inputFunction) =>
        (...args) => {

       const resultValue = inputFunction(...args);
       console.log(resultValue);

       return resultValue;
        }

const add = (...all) => {
    return all.reduce( (a,b) => a+b,0)   ;

    }


const multiply = (...all) => {
  return all.reduce((a,b)=> a*b,1);

  }
```
