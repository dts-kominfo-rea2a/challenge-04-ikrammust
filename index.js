// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (dates, dateIndex=dates.length) => {
  // create function to convert milisecond to second
  let milisecondConverter = (milis) => Math.floor(milis / 1000);

  // check if no params go to looping
  if(dateIndex === dates.length) {
    // set a container variable
    let noParamsOutput = [];

    // loops until the contents of the array run out
    for(counter = 0; counter < dateIndex; counter++) {
      // convert milisecond date into second
      let dateInSecond = milisecondConverter(Date.parse(dates[counter]));
      // push into container variable
      noParamsOutput.push(dateInSecond.toString());
    }

    // sort output
    noParamsOutput.sort();
    return noParamsOutput.join("-");
  }

  // if user enter the date index -> parse the output
  let outputDate = milisecondConverter(Date.parse(dates[dateIndex])).toString();
  return outputDate;
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
