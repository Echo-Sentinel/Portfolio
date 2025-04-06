// task1
// function findVowels(str) {
//     const vowels = "aeiouAEIOU";
//     const chars = str.split('');
//     const foundVowels = chars.filter(char => vowels.includes(char));

//     console.log("Sait:", foundVowels);
//     console.log("Sayi:", foundVowels.length);
// }

// findVowels("I am frontend DEVELOPER I LEARN Javascript");

// task2
// function countWords(str) {
//     return str.trim().split(" ").filter(word => word !== "").length;
// }

// console.log("Sozlerin sayi:", countWords("I am frontend DEVELOPER I LEARN Javascript"));

// task3
// function findLongestWord(str) {
//     const words = str.trim().split(" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }

// console.log("en uzun soz:", findLongestWord("I am frontend DEVELOPER I LEARN Javascript"));

// task4
// function findAllUpperCaseWords(str) {
//     const words = str.split(" ");
//     const upperCaseWords = [];

//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === words[i].toUpperCase()) {
//             upperCaseWords.push({ word: words[i], index: i });
//         }
//     }
//     return upperCaseWords;
// }
// const myString = "I am frontend DEVELOPER I LEARN JAVASCRIPT and HTML";
// const result = findAllUpperCaseWords(myString);

// if (result.length > 0) {
//     result.forEach(item => {
//         console.log("Butun herfleri boyuk olan soz:", item.word);
//         console.log("İndeks:", item.index);
//     });
// }

// task5
// function findWords(str) {
//     const words = str.split(" ");
//     const result = [];

//     for (let i = 0; i < words.length; i++) {
//         const upperCaseCount = words[i].split("").filter(letter => letter === letter.toUpperCase()).length;
//         if (upperCaseCount > 2) {
//             result.push(words[i]);
//         }
//     }
//     return result;
// }

// const myString = "I am frontend DEVELOPER I LEARN JAVASCRIPT and HTML DOM";
// const result = findWords(myString);

// if (result.length > 0) {
//     result.forEach(word => console.log(word))
// };

// task6
// function getInit(str) {
//   return str
//     .split(" ")
//     .map((word) => word[0].toUpperCase())
//     .join("");
// }

// const myString = "My name is Jhon";
// const result = getInit(myString);
// console.log(result);

// task7
// function shortenWords(str) {
//     const words = str.split(" ");
//     const shortenedWords = words.map(word => {
//         if (word.length >= 4) {
//             const firstLetter = word[0];
//             const lastLetter = word[word.length - 1];
//             const middleCount = word.length - 2;
//             return `${firstLetter}${middleCount}${lastLetter}`;
//         }
//         return word;
//     });

//     return shortenedWords.join(" ");
// }

// const myString = "komputer stəkan javascript";

// const result = shortenWords(myString);
// console.log(result);

// task8
// function remDupCount(arr) {
//     const countMap = {};
//     const uniqNum = [];

//     for (let num of arr) {
//         if (countMap[num]) {
//             countMap[num]++;
//         } else {
//             countMap[num] = 1;
//             uniqNum.push(num);
//         }
//     }

//     console.log("Tekrarlanan reqemler və sayi:");
//     for (let num in countMap) {
//         if (countMap[num] > 1) {
//             console.log(`${num}: ${countMap[num]} defe`);
//         }
//     }
//     return uniqueNumbers;
// }

// const myArray = [1, 2, 2, 3, 4, 5, 5, 6, 6, 6];
// const result = remDupCount(myArray);
// console.log("Unikal reqemler:", result);

// task9
// function isPalindrome(str) {
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const reversedStr = cleanedStr.split('').reverse().join('');

//     return cleanedStr === reversedStr;
// }

// const myString = prompt("Bir soz daxil edin:");
// const result = isPalindrome(myString);

// console.log(result ? "Bu bir polindromdur." : "Bu bir polindrom deyil.");

// task10
// function countSmaller(arr, num) {
//     return arr.reduce((count, element) => {
//         if (element < num) {
//             count++;
//         }
//         return count;
//     }, 0);
// }

// const arr = [10, 5, 8, 12, 3, 7];
// const num = 8;
// const result = countSmaller(arr, num);
// console.log(`Arrayde ${num}-den kicik olan ${result} element var.`);

// task11

// const customers = [
//   {
//     name: "Tyrone",
//     personal: {
//       age: 33,
//       hobbies: ["Bicycling", "Camping"],
//     },
//   },
//   {
//     name: "Elizabeth",
//     personal: {
//       age: 25,
//       hobbies: ["Guitar", "Reading", "Gardening"],
//     },
//   },
//   {
//     name: "Penny",
//     personal: {
//       age: 36,
//       hobbies: ["Comics", "Chess", "Legos"],
//     },
//   },
// ];
// const allHobbies = customers.reduce((acc, customer) => {
//   customer.personal.hobbies.forEach((hobby) => acc.push(hobby));
//   return acc;
// }, []);

// console.log("Bütün hobbilər:", allHobbies);

// task12
// 1. Random arr
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 100) + 1); // 1-100 arası random ədəd
// }
// console.log("Random array:", arr);

// // 2. en boyuk element
// const max = Math.max.apply(null, arr);
// console.log("En boyuk:", max);

// // 3. en kicik element
// const min = Math.min.apply(null, arr);
// console.log("En kicik:", min);

// // 4. toplama 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("Toplam:", sum);

// // 5. ortalama
// const avg = Math.floor(sum / arr.length); 
// console.log("Ortalama:", avg);

// // 6. ededlerin kvadratları 
// const squares = [];
// for (let i = 0; i < arr.length; i++) {
//   squares.push(Math.pow(arr[i], 2));
// }
// console.log("Kvadratlar:", squares);