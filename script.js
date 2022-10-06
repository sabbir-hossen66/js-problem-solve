// //1 লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি  প্রিন্ট করতে পারি

// function getNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // console.log(getNumber(1, 6));

// //2. কিভাবে আমরা আমাদের শ্রেনীকক্ষে সকলের নাম alphabetically সাজাতে পারি?

// const students = ['sabbir', 'rayan', 'pejuti', 'fahim'];
// // console.log(students.sort());

// //3. কিভাবে আমরা আমাদের শ্রেনীকক্ষের রোল নম্বর ক্রম অনুযায়ী সাজাতে পারি?
// const roll_number = [3, 5, 78, 6, 41, 98];

// console.log(roll_number.sort(function (a, b) {
//     return a - b;
// }));

// // 4. কোন সাল leap year কিনা তা বের করতে পারি কিভাবে?
// // function isLeapYear(year) {
// //     if ((year % 4000 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
// //         console.log(`${year} is a leap Year !`);
// //     }
// //     else {
// //         console.log(`{year} is not a leap year`);
// //     }
// // }
// // isLeapYear(2028)

// /* অথবা  */

// function leapYear(year) {
//     return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
// console.log(leapYear(2028));

// // 5.কোন sentence এ কত গুলো vowel আছে তা নির্ণয় করে কিভাবে?

// const vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];

// function countVowels(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence);
//     letters.forEach(function (value, index, array) {
//         if (vowels.includes(value)) {
//             count++;
//         }
//     })
//     return count;
// }
// // console.log(countVowels('i love bangladesh'));

// //6. কোন Array থেকে unique নাম্বার গুলোকে কি ভাবে করে আনতে পারি?

// const numbers = [1, 2, 3, 6, 4, 7, 8, 34, 54, 73, 24, 16, 2, 4, 74, 15, 16];

// const duplicates = numbers.filter(function (value, index, array) {
//     return array.indexOf(value) === index
// })

// console.log(duplicates);



// let name = ['ramim', 'sumi', 'tona'];
// name.splice(2, 1, 'kona')
// console.log(name);

// let numbers = [2, 12, 35, 4, 6, 8];
// // anonymus function
// numbers.sort(function (a, b) {
//     return a - b;
// })

// console.log(numbers);

// let sonkha = [2, 45, 7, 57, 34,];
// sonkha.sort(function (a, b) {
//     return b - a;
// })
// console.log(sonkha);

console.clear();
// function highestScores(scores) {
//     let max = scores[0];
//     for (let x = 0; x < scores.length; x++) {
//         if (max < scores[x]) {
//             max = scores[x]
//         }
//     }
//     return max;
// }

// let arryName = [23, 43, 54, 23, 45]
// let maximum = highestScores(arryName);
// console.log(maximum);


// function highestScores(some) {
//     let max = some[0];
//     for (let x = 1; x < some.length; x++) {
//         if (max < some[x]) {
//             max = some[x]
//         }
//     }
//     return max;
// }

// let numbers = [32, 34, 65, 78, 12];
// let maximumNumber = highestScores(numbers);
// console.log(maximumNumber);





/* New Task----------------- */
// function highestScores(scores) {
//     let max = scores[0]
//     for (let x = 1; x < scores.length; x++) {
//         if (max < scores[x]) {
//             max = scores[x];
//         }
//         else if (max < 43) {
//             break;
//         }
//     }
//     return max;
// }
// let numberArray = [23, 12, 43, 64, 75, 45, 34];
// let highNumber = highestScores(numberArray);
// console.log(highNumber);

function highestScores(a, b) {

}
let arr = [
    [name, 20],
    [age, 23],
    [job, "teaching"]
]
highestScores(arr)