// task1
// let num1 = Number(prompt("Enter number"));
// let num2 = Number(prompt("Enter number"));
// let opr = prompt("Emeliyyati daxil edin");
// if( opr === "+" || opr === "-" || opr === "/" || opr === "*"){
//     let result;
//     if( opr === "+"){
//         result = num1 + num2;
//     }else if( opr === "-"){
//         result = num1 - num2;
//     }else if( opr === "*"){
//         result = num1 * num2;
//     }else if( opr === "/"){
//         if( num2,num1 !== 0){
//             result = num1 / num2;
//         }
//     }
//     console.log("Netice: " + result);
// }

// task2
// let arr = [14, 20, 35, 40, 57, 60, 100];
// function FindNum(...arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num % 2 === 0) {
//       console.log( num + "cut eded");
//     } else {
//       console.log( num + "tek eded");
//     }
//   }
// }
// FindNum(14, 20, 35, 40, 57, 60, 100);

// task3
// let arr = [14, 20, 35, 40, 57, 60, 100];
// function FindSum(...arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num % 4 === 0 && num % 5 === 0) {
//       result.push(num);
//     } else {
//       console.log(num + "Bolunmur");
//     }
//   }
//   return result;
// }
// let divnum = FindSum(...arr);
// console.log("Bolunur", divnum);
// let sum = 0;
// for (let i = 0; i < divnum.length; i++) {
//   sum += divnum[i];
// }
// console.log("Сумма этих чисел:", sum);

// task4
// function countSymbolInSentence(sentence, symbol) {
//     let count = 0;
//     for (let i = 0; i < sentence.length; i++) {
//       if (sentence[i] === symbol) {
//         count = count + 1 ;
//       }
//     }
//     return count;
//   }
//   let sentence = prompt("Cumle yazin: ");
//   let symbol = prompt("Axtaris ucun simvol daxil edin: ");
//   let result = countSymbolInSentence(sentence, symbol);
//   console.log(`Simvol '${symbol}' cumlede rast gelinir ${result} defe.`);

// task5
// function chekab() {
//   let number = prompt("Reqem elave edin ");
//   if (number <= 0) {
//     return "enter a positive number";
//   }

//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//       sum += i;
//     }
//   }
//   if (sum > number) {
//     return `${number} Aboundan reqemdir`;
//   } else {
//     return `${number} Deficient reqemdir`;
//   }
// }
// console.log(chekab());

// task6
// let arr = [14, 20, 35, 40, 57, 60, 100];
// function squarednum(...arr) {
//   let squaredArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let square = arr[i] * arr[i];
//     squaredArr[i] = square;
//   }
//   return squaredArr;
// }
// let result = squarednum(...arr);
// console.log(result);

//  task7
// function diff() {
//     let arr = [13,67,54,73,16];
//     let minAge = arr[0];
//     let maxAge = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         let age = arr[i];

//         if ( age < minAge){
//             minAge=age;
//         }else if ( age > maxAge){
//             maxAge = age;
//         }
//         }
//         let diffAge = maxAge - minAge;
//         let result = [minAge,maxAge, diffAge];
//         console.log(result);
//     }
//     diff();
