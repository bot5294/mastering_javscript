// Question Link
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// Solution

function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let change = cash - price;
    let totalCID = 0;
    const changeArray = [];
    for (let i = 0; i < cid.length; i++) {
      const currency = cid[i][0];
      const amount = cid[i][1];
      totalCID += amount;
    }
    if (totalCID < change) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCID === change) {
      return { status: "CLOSED", change: cid };
    } else {
      for (let i = cid.length - 1; i >= 0; i--) {
        const currency = cid[i][0];
        let amount = cid[i][1];
        const currencyValue = currencyValues[currency];
        let currencyCount = 0;
  
        while (change >= currencyValue && amount > 0) {
          change -= currencyValue;
          amount -= currencyValue;
          change = Math.round(change * 100) / 100; // Round to two decimal places
          currencyCount += currencyValue;
        }
  
        if (currencyCount > 0) {
          changeArray.push([currency, currencyCount]);
        }
      }
    }
  
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArray };
    }
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))