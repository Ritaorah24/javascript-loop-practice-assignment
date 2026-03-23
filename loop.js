//QUESTION 1
let number = 30
for (let i= 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log("Even")
    } else if (i % 3 == 0) {
        console.log("Multiple of 3")
    } else  {
        console.log(i)
    }
};

// QUESTION 2
 let Num = [3,-2,7,-5,0,4];
 let positiveCount = [0] 
 let negativeCount = [0]
 for (let i = 0; i <= Num.length; i++) {
     if (Num[i] > 0) {
        positiveCount++;
     }  
 else if (Num[i] < 0) {
    negativeCount++;
 }
 } 
 console.log("negative is" + " " + positiveCount + " " + "negative is" + " " + negativeCount)
 
 //QUESTION 3
 let arr = [4,8,6,10,2]
 let average = 6
 for (let i = 0; i< arr.length; i++) {
    if (arr [i] > average) {
        console.log(arr[i]);
    }
 }


//QUESTION 4

for ( let i = 1; i <= 15; i++) {
    if(i % 2 == 0) {
        console.log("Even")
    } 
    else {
    console.log("odd")
 }
}

//QUESTION 5
array = [1,3,5,3,7]
let duplicate = []
for (i = 0; i < array.length; i++) {
    if (duplicate.includes (array[i])) {
        console.log(array[i]);
    } else {
        duplicate.push(array[i]);
    }
}

//QUESTION 6
array = [12,5,8,130,44]
for (i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        console.log(array[i])
    }
}

//QUESTION 7
let word = "education"
let vowels = "aeiou"
let counter = 0
function countVowels(word) {
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter++;
        }
    }
    return counter
}
console.log(countVowels("education") + " " + "vowels");


//QUESTION 8
array = [15,3,22,1,9];
let smallestNo = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestNo) {
        smallestNo = array[i]
    }
}
console.log(smallestNo)


//QUESTION 9
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 10 !== 0) {
        console.log(i)
    }
}

//QUESTION 10
array = [2,4,2,6,2,8]
let countA = 0
let targetNo = 2
for (i = 0; i < array.length; i++) {
    if (array[i] === targetNo) {
        countA++;
    }
}
console.log(countA + " " + "times")


//QUESTION 11
let sum = 0
for (let i = 1; i <= 20; i++) {
    sum += i;
}
console.log(sum)


//QUESTION 12
let product = 1
for (let i = 1; i <= 5; i++) {
    product *= i;
}
console.log(product)


//QUESTION 13
for (let i = 1; i <= 10; i++) {
if (i % 2 === 0) {
    console.log(i + "=>" + (i * i))
} else {
    console.log(i)
}
}


//QUESTION 14
let sum1 = 0
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i)
        sum += i;
    }
}
console.log("Total sum =" + " " + sum)


//QUESTION 15
let total = 0
let prices = [200, 150, 300, 100];
for (i = 0; i < prices.length; i++) {
    total += prices[i]
}
console.log(total)

