// STOCK PRICES
function best(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // CALCULATE MAX
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    // CALCULATE MIN
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
}

console.log(best([15, 10, 20, 22, 1, 9]));
