// task1
// function isArmstrong(num) {
//   const str = num.toString();
//   const power = str.length;
//   let sum = 0;
  
//   for (let digit of str) {
//     sum += Math.pow(parseInt(digit), power);
//   }
  
//   return sum === num;
// }

// function findArmstrongNumbers(limit) {
//   const result = [];
  
//   for (let i = 0; i <= limit; i++) {
//     if (isArmstrong(i)) {
//       result.push(i);
//     }
//   }
  
//   return result;
// }

// const numbers = findArmstrongNumbers(1000);
// console.log("Armstrong ededleri 1000 qeder:", numbers);

// task2

console.log('Vurma Cədvəli (1-10):');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

numbers.forEach(function (firstNumber) {
  let row = ''; 

  numbers.forEach(function (secondNumber) {
    row += firstNumber + 'x' + secondNumber + '=' + (firstNumber * secondNumber).toString().padStart(2) + ' ';
  });

  console.log(row);
});

// task3
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];
// let kicikler = [];
// let boyukler = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 30) {
//     kicikler.push(arr[i]);
//   } else if (arr[i] > 30) {
//     boyukler.push(arr[i]);
//   }
// }

// console.log("30-dan kiçik yaşlar:", kicikler);
// console.log("30-dan böyük yaşlar:", boyukler);

// task4
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];
// let numbers = []; 
// let sum = 0;      
// let count = 0;    

// console.log("Zəhmət olmasa 10 ədəd daxil edin:");

// while (count < 10) {
//   let number = prompt(`${count + 1}. ədədi daxil edin:`);
  
//   if (!isNaN(number)) {
//     numbers.push(number); 
//     sum += number;       
//     count++;            
//   } else {
//     console.log("Xəta: Yalnız rəqəm daxil edə bilərsiniz!");
//   }
// }

// let average = sum / 10;

// console.log("Daxil etdiyiniz ədədlər:", numbers);
// console.log("Ədədlərin cəmi:", sum);
// console.log("Ədədi orta:", average);

// task5
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let bolen = prompt("Mod almaq üçün bölən ədədi daxil edin:");

// if (!isNaN(bolen) && bolen != 0) { // bolen !== 0 заменено на bolen != 0, т.к. prompt возвращает строку
//   console.log(bolen + " ədədinə görə mod nəticələri:");

//   arr.forEach(function (eded) {
//     let mod = eded % bolen;
//     console.log(eded + " % " + bolen + " = " + mod);
//   });

// } else {
//   console.log("Xəta: Yalnız sıfırdan fərqli ədəd daxil edə bilərsiniz!");
// }

// task6
// let arr = [ 19, 2, 13, 196, 86, 35, 77, 203];
// let maxEded = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxEded) {
//     maxEded = arr[i];
//   }
// }

// console.log("Massivdəki ən böyük ədəd:", maxEded);

// task7
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let minIndex = 0;
// let maxIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < arr[minIndex]) {
//     minIndex = i;
//   }
//   if (arr[i] > arr[maxIndex]) {
//     maxIndex = i;
//   }
// }

// if (minIndex !== maxIndex) { 
//   let temp = arr[minIndex];
//   arr[minIndex] = arr[maxIndex];
//   arr[maxIndex] = temp;
// }

// console.log("Dəyişdirilmiş massiv:", arr);

// task8
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== min && arr[i] !== max) {
//     sum += arr[i];
//   }
// }

// console.log("Ən kiçik element:", min);
// console.log("Ən böyük element:", max);
// console.log("Digər elementlərin cəmi:", sum);

// task9
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let eded = parseInt(prompt("Yoxlamaq istədiyiniz ədədi daxil edin:"));

// let tapildi = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === eded) {
//     tapildi = true;
//     break; 
//   }
// }

// if (tapildi) {
//   console.log(`${eded} ədədi massivdə VAR.`);
// } else {
//   console.log(`${eded} ədədi massivdə YOXDUR.`);
// }

// task10
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let birReqemli = 0;
// let ikiReqemli = 0;
// let ucReqemli = 0;

// for (let i = 0; i < arr.length; i++) {
//   let num = Math.abs(arr[i]);
//   let reqemSayi = num.toString().length;
  
//   if (reqemSayi === 1) {
//     birReqemli++;
//   } else if (reqemSayi === 2) {
//     ikiReqemli++;
//   } else if (reqemSayi === 3) {
//     ucReqemli++;
//   }
// }

// console.log("Nəticə:");
// console.log("Bir rəqəmli ədədlər:", birReqemli);
// console.log("İki rəqəmli ədədlər:", ikiReqemli);
// console.log("Üç rəqəmli ədədlər:", ucReqemli);