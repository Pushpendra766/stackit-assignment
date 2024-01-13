// const API_ENDPOINT =
//   "https://api.upstox.com/v2/historical-candle/intraday/NSE_EQ%7CINE848E01016/1minute";

const API_ENDPOINT =
  "https://api.upstox.com/v2/historical-candle/NSE_EQ%7CINE848E01016/1minute/2023-11-13/2023-11-12";

const COLUMNS = ["Open", "High", "Low", "Close", "Volume"];

const COLORS = [
  "rgb(255, 99, 132)",
  "rgb(75, 192, 192)",
  "rgb(53, 162, 235)",
  "rgb(70, 70, 235)",
];

export { API_ENDPOINT, COLUMNS, COLORS };
