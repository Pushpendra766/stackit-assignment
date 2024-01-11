const properties = ["Open", "High", "Low", "Close", "Volume"];

function getPropertyData(data, column) {
  const i = properties.indexOf(column);
  const slicedData = data.map((el) => el[i + 1]);

  slicedData.sort();

  const n = slicedData.length;

  const dataSum = slicedData.reduce((acc, el) => acc + el, 0);
  const dataAvg = dataSum / n;
  const dataMedian =
    n % 2 === 0
      ? (slicedData[parseInt(n / 2)] + slicedData[parseInt(n / 2) + 1]) / 2
      : slicedData[parseInt(n / 2)];

  return {
    property: column,
    summation: dataSum.toFixed(2),
    average: dataAvg.toFixed(2),
    median: dataMedian,
  };
}

const getSummaryData = function (data, selectedColumns) {
  const summaryData = selectedColumns.map((column) =>
    getPropertyData(data, column)
  );
  return summaryData;
};

export default getSummaryData;
