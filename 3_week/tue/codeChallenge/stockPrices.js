// STOCK PRICES
// function best(prices) {
//   if (prices.length < 2) {
//     return 0;
//   }

//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     // CALCULATE MAX
//     maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//     // CALCULATE MIN
//     minPrice = Math.min(minPrice, prices[i]);
//   }

//   return maxProfit;
// }

const best = (prices) =>
  prices.length < 2
    ? 0
    : prices.reduce(
        ([minPrice, maxProfit], price) => [
          Math.min(minPrice, price),
          Math.max(maxProfit, price - minPrice),
        ],
        [prices[0], 0]
      )[1];

console.log(best([15, 10, 20, 22, 1, 9]));
