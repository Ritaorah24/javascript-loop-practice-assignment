//Question 1
// const numbers = [1,2,3,4,5,6]
// function getEvenNumbers(numbers) {
//     return numbers%2 === 0
// } 
// const evenNumbers = numbers.filter(getEvenNumbers)
// console.log(evenNumbers)

// //Question 2 
// const capitalizeWord = word => {
//     return word.toUpperCase()
// }
// console.log(capitalizeWord("javascript"))

// //Question 3
// const Numbers = [ 2,5,7,10]
// function sumNumbers(sum, k) {
//     return sum += k
// }
// const findSum = Numbers.reduce(sumNumbers)
// console.log(findSum)

// //Question 4
// Array = [3,4,6]
// const cubeNumbers = (Array) => {
// return Array * 3
// }
// const getCube = Array.map(cubeNumbers)
// console.log(getCube)

// //Question 5
//  const checkWord = "House"
//     console.log(checkWord.includes("js"))


// //Question 6
// console.log(parseInt("45"))

// //Question 7
// const names = ["Amaka","Nkechi","Obinna","Ada"];

// function findNamesLongerThanFour(names) {
//     return names.filter(function(name) {
//         return name.length > 4;
//     });
// }

// console.log(findNamesLongerThanFour(names));

// //Question 8
// const reverseText = (text) => {
//   return text.split('').reverse().join('');
// };
// console.log(reverseText("rita"))


// //Question 9
// function roundNumbers(numbers) {
//   return numbers.map(function(num) {
//     return Math.round(num);
//   });
// }
// console.log(roundNumbers([2.3, 4.8, 5.1]))

// //Question 10
// const getPassedScores = (scores) => {
//   return scores.filter(score => score >= 50);
// };
// console.log(getPassedScores([30,55,70,40,90]))


//NEW ASSIGNMENT ON DESTRUCTURING
//QUESTION NO 1
const user1 ={
  name: "Ada",
  skills:["JS","Node"],
};
const processUser1 = ({name,skills}) => {
  const newSkills = [...skills,"React"]

  return `${name} knows ${newSkills.join(",")}`
}
console.log(processUser1(user1));

//QUESTION NO 2
const multiplyNumbers = (multiplier,...numbers) => {
  const collectedNumbers = [...numbers] 
  return collectedNumbers.map(num => num * multiplier)
}
console.log(multiplyNumbers(2,1,2,3))

// QUESTION NO 3
const student = {
  name: "John",
  scores: [70, 80],
  details: {
    class: "SS3"
  }
};
 const processStudent = (student) => {
  const {name,scores,details} = student
  const newScore = [90,...scores]
  return `${name} in ${details.class} scored ${newScore.join()}`
 }
 console.log(processStudent(student))

// //  QUESTION NO 4
const numbers = [1,2,3,4,5]
const processNumbers = (first,numbers,...rest) => {
const  newNumbers = [first,numbers,...rest]
return newNumbers.map(num => num * 2) 
}
console.log(processNumbers(1,2,3,4,5))

// QUESTION NO 5
const user2 = {
  name: "Ada",
  age: 25,
  role: "admin"
};
const updateUser = ({name,...rest}) => {
return {
  username: name,
  ...rest
}
}
console.log(updateUser(user2)); 

//QUESTION NO 6
const user = {
  name: "Ada",
  address: {
    city: "Lagos"
  }
};
const cloneUser = (user) => {
const newUser= {...user,address:{...user.address,
  city:"Abuja"
}

} 
return newUser;
}

console.log(cloneUser(user));

// EXPLANATION 
/* The original object stays unchanged because the spread 
operator creates a shallow copy. Instead of duplicating 
the memory address, both objects still reference the 
same nested data */


//QUESTION NO 7
const users = [
  {
    name: "Ada",
    skills: ["JS"]
  },
  {
    name: "Sam",
    skills: ["Python"]
  }
];
const processUser = (users) => {
  const [firstUser,...restUsers] = users;
    const newFirstUser = {
      ...firstUser,
      skills: [...firstUser.skills,"React"]
    }
return {
  firstUser: newFirstUser, restUsers
  }
}
console.log(processUser(users))


// QUESTION NO 8
const sumAll = (...numbers) => {
  const sumNo = [...numbers]; 
  const [firstNo,...rest] = sumNo
  const sum = rest.reduce((sum,num) => sum + num, firstNo)
  return sum
}
console.log(sumAll(5,10,15))


//QUESTION NO 9
const data = {
  user: {
    info: {
      name: "Ada"
    },
    skills: ["JS"]
  }
};

const processData = (data) => {
  const {
    user: {
      info: { name },
      skills
    }
  } = data;

  return {
    name,
    skills: [...skills, "Node"]
  };
};

console.log(processData(data));


//QUESTION NO 10
const records1 = [
  {
    name: "Ada",
    scores: [10, 20]
  },
  {
    name: "Sam",
    scores: [30, 40]
  }
];

const records = [
  {
    name: "Ada",
    scores: [10, 20]
  },
  {
    name: "Sam",
    scores: [30, 40]
  }
];

const processRecords = (records) => {
  const [first, ...rest] = records;

  const { name, scores } = first;

  const combinedScores = [
    ...scores,
    ...rest.flatMap(record => record.scores)
  ];

  return {
    name,
    scores: combinedScores
  };
};

console.log(processRecords(records));