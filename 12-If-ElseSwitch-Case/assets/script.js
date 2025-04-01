// const fuelPrices = {
//     1: 0.9,  
//     2: 1,    
//     3: 1.5   
//   };
  
  
//   function getFuelType() {
//     let fuelChoice = prompt("Yanacaq növünü seçin:\n1. Dizel\n2. Benzin\n3. Premium\nDaxil edin 1, 2 və ya 3:");
  
//     switch (fuelChoice) {
//       case '1':
//         return 'Dizel';
//       case '2':
//         return 'Benzin';
//       case '3':
//         return 'Premium';
//       default:
//         alert("Zəhmət olmasa düzgün yanacaq növünü seçin.");
//         return null;
//     }
//   }
  
  
//   function getFuelAmountAndBudget() {
//     let amount = parseFloat(prompt("Yanacaq miqdarını daxil edin(Litr):"));
//     let budget = parseFloat(prompt("Büdcənizi daxil edin (AZN):"));
  
  
//     if (!Number.isInteger(amount) || amount <= 0) {
//       alert("Yanacağın miqdarı tam və sıfırdan çox olmalıdır.");
//       return null;
//     }
  
//     if (!Number.isInteger(budget) || budget <= 0) {
//       alert("Büdcə tam və sıfırdan çox olmalıdır.");
//       return null;
//     }
  
//     return { amount, budget };
//   }
  
  
//   function main() {
//     let fuelType = getFuelType();
//     if (!fuelType) return; 
  
//     let { amount, budget } = getFuelAmountAndBudget();
//     if (!amount || !budget) return; 
  
   
//     let pricePerLiter = fuelPrices[{
//       Dizel: 1,
//       Benzin: 2,
//       Premium: 3
//     }[fuelType]];
  
  
//     let totalPrice = amount * pricePerLiter;
  
    
//     if (budget >= totalPrice) {
//       let remainingBalance = budget - totalPrice;
//       alert(`Ümumi dəyər: ${totalPrice.toFixed(2)} AZN.\nQaliq: ${remainingBalance.toFixed(2)} AZN.`);
//     } else {
//       alert(`Ümumi dəyər: ${totalPrice.toFixed(2)} AZN.\nBüdcəniz kifayət deyil.`);
//     }
//   }
//   main();

  function showMonthsBySeason() {

    let season = prompt("Mövsümü daxil edin (Yay, Qış, Yaz, Payız):");

    switch (season) {
        case 'yay':
            alert("Yay Mövsümü: İyun, İyul, Avqust");
            break;
        case 'qış':
            alert("Qış Mövsümü: Dekabr, Yanvar, Fevral");
            break;
        case 'yaz':
            alert("Yaz Mövsümü: Mart, Aprel, May");
            break;
        case 'payız':
            alert("Payız Mövsümü: Sentyabr, Oktyabr, Noyabr");
            break;
        default:
            alert("Zəhmət olmasa, düzgün bir mövsüm daxil edin (Yay, Qış, Yaz, Payız).");
    }
}

showMonthsBySeason();