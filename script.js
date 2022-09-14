//1 লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি  প্রিন্ট করতে পারি

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getNumber(1, 6));

//2. কিভাবে আমরা আমাদের শ্রেনীকক্ষে সকলের নাম alphabetically সাজাতে পারি?

const students = ['sabbir', 'rayan', 'pejuti', 'fahim'];
// console.log(students.sort());

//3. কিভাবে আমরা আমাদের শ্রেনীকক্ষের রোল নম্বর ক্রম অনুযায়ী সাজাতে পারি?
const roll_number = [3, 5, 78, 6, 41, 98];

console.log(roll_number.sort(function (a, b) {
    return a - b;
}));

// 4. কোন সাল leap year কিনা তা বের করতে পারি কিভাবে?
// function isLeapYear(year) {
//     if ((year % 4000 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
//         console.log(`${year} is a leap Year !`);
//     }
//     else {
//         console.log(`{year} is not a leap year`);
//     }
// }
// isLeapYear(2028)

/* অথবা  */

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
console.log(leapYear(2028));

// 5.কোন sentence এ কত গুলো vowel আছে তা নির্ণয় করে কিভাবে?

const vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function (value, index, array) {
        if (vowels.includes(value)) {
            count++;
        }
    })
    return count;
}
// console.log(countVowels('i love bangladesh'));

//6. কোন Array থেকে unique নাম্বার গুলোকে কি ভাবে করে আনতে পারি?

const numbers = [1, 2, 3, 6, 4, 7, 8, 34, 54, 73, 24, 16, 2, 4, 74, 15, 16];

const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) === index
})

console.log(duplicates);