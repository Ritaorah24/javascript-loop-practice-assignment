// function sum(num1,num2) {
//     return num1 + num2
// }
// console.log(sum(3,3))
// sum()

// function product(number) {
//     return number * 2
// }
// console.log(product(5))
// product()

// function multiply(a,b) {
//  return a * b  
// }
// console.log(multiply(5,2))
// multiply()

// let x = 5
// function multiply1() {
//     return 2 * x
// }
// console.log(multiply)

// function greet(name="Rita") {
//     console.log(name)
// }
// greet()

// greet()
// function greet(name = 'Ruth') {
// console.log(name)
// }

// const add = (a,b) => a + b
// console.log(add(4,5))

// const double = (c, d) => {return c * d}
// console.log(double(5,2))


// console.log(isNaN(2))
// console.log(isNaN("nita"))
// const value = isNaN(["boo"])
// console.log(value)

// console.log(parseInt("3"))
// const name = parseInt("4")
// console.log(name)

// console.log(parseInt("2") + parseInt("3"))
// console.log(typeof("Vivian"))
// console.log(typeof(["mango","kiwi"]))
// console.log(typeof(3))
// console.log(typeof(null))

// const person = {
//     name: "John",
//     greet() {
//     setTimeout(() => {
// console.log("name",this.name);
//     }, 5000)
//     }
// }
// person.greet();

// const student ={
//     age: 20,
//     hobby: "football",
//     greet1() {
//      setTimeout(() => {
//     console.log(this.age, this.hobby);
//     }, 7000)   
//     }
// }
// student.greet1();

// const word = " Hello "
// console.log(word.charAt(0)); /* checks the index of a variable*/
// console.log(word.concat(" world")); /* adds new word to the
// old word*/ 
// console.log(word.includes("Hello")); /* checks if a word is 
// included in a variable*/
// console.log(word.slice(0,3))/* it checks the starting of a varible 
// to where you want it to end and discard the rest */
// console.log(word.slice(0))
// console.log(word.substring(0,4)) /* does the same thing as
// slice method */
// console.log(word.split("l")); /* this removes the charcter you
// don't want and replaces it with a comma and returns the rest*/
// console.log(word.trim().length);/* removes spaces aroun a world*/
// console.log(word.toUpperCase()) /* this changes from lowercase
// to an uppercase*/
// console.log(word.toLowerCase()) /* changes uppercase to lowercase*/

// const array = [1,2,3,4,5]
// // array.push(6)
// // console.log(array)
// // array.pop()
// // console.log(array)
// // // array.reverse()
// // // console.log(array)
// // array.splice(2,2)
// // console.log(array)
// const newArray = array.map(num => num > 2)
// console.log(newArray)
// const Array1 = array.map(num => num >2 ? num:"NOT GREATER THAN 2") /* this 
// method is called ternary opertors*/
// console.log(Array1)

// const numbers = [2,4,6,8]
// function doublenumber(){
//    const newNumbers = numbers.map(num => num * num) 
//    return newNumbers
// }
// console.log(doublenumber())

// //filter method
// const no=[1,2,3,4,5,6,7,8]
// const newNo= no.filter(no=> no%2==0)
// console.log(newNo)

// //reduce method
// const reducedNumbers=no.reduce((sum,num)=>sum+num,0)
// console.log(reducedNumbers)