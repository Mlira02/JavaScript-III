/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is also called global binding. When using this in a window binding the binding will call 
     Javascript and the console as a whole.
* 2. I think what implicit means is that the binding only calls on the items within 
     a single object and does not call on anything outside of that object
* 3. A new binding is a binding that is used in constructor functions. Using this on you keys will allow
     to make a new duplicate of that object but with different values.
* 4. Explicit binding can use .call and .apply to be able to use a different function or object 
     from outside of other objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 
console.log(this);

// Principle 2

// code example for Implicit Binding
const name = {
    user: "marcos",
    age: 23,
    hello() {
        console.log(`Hello my name is ${this.user}`);
    }
}
name.hello();
// Principle 3

// code example for New Binding
function Person (name, gender) {
    this.name = name
    this.gender = gender
}
const me = new Person("Marcos", "Male")
console.log(me);
// Principle 4

// code example for Explicit Binding
function hello() {
    console.log(`Hello, my name is ${this.name}`);
}

const me2 = {
    name: "Marcos",
}

hello.call(me2);