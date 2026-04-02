//Question 1
const numbers = [1,2,3,4,5,6]
function getEvenNumbers(numbers) {
    return numbers%2 === 0
} 
const evenNumbers = numbers.filter(getEvenNumbers)
console.log(evenNumbers)

//Question 2
const capitalizeWord = word => {
    return word.toUpperCase()
}
console.log(capitalizeWord("javascript"))

//Question 3
const Numbers = [ 2,5,7,10]
function sumNumbers(sum, k) {
    return sum += k
}
const findSum = Numbers.reduce(sumNumbers)
console.log(findSum)

//Question 4
Array = [3,4,6]
const cubeNumbers = (Array) => {
return Array * 3
}
const getCube = Array.map(cubeNumbers)
console.log(getCube)

//Question 5
 const checkWord = "House"
    console.log(checkWord.includes("js"))


//Question 6
console.log(parseInt("45"))

//Question 7
const names = ["Amaka","Nkechi","Obinna","Ada"];

function findNamesLongerThanFour(names) {
    return names.filter(function(name) {
        return name.length > 4;
    });
}

console.log(findNamesLongerThanFour(names));

//Question 8
const reverseText = (text) => {
  return text.split('').reverse().join('');
};
console.log(reverseText("rita"))


//Question 9
function roundNumbers(numbers) {
  return numbers.map(function(num) {
    return Math.round(num);
  });
}
console.log(roundNumbers([2.3, 4.8, 5.1]))

//Question 10
const getPassedScores = (scores) => {
  return scores.filter(score => score >= 50);
};
console.log(getPassedScores([30,55,70,40,90]))