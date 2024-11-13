// ASSIGNMENT ON JAVASCRIPT FOR BEGINNERS.

// let country = "Nigeria";
// let continent = "Africa";
let nigeriaPopulation = 120000000;
// console.log(country continent, nigeriaPopulation);
// console.log(typeof continent);
// Datatype
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof nigeriaPopulation);
// console.log(typeof country);
console.log(typeof language);
// LET,VAR AND CONST
language = 'English';
const country = 'Nigeria';
const continent = 'Africa';
// Basic operator
const countryHalfPopulation = nigeriaPopulation / 2;
nigeriaPopulation++;
console.log(nigeriaPopulation);
const finlandPopulation = 6000000;
const isFinlandMorePopulated = finlandPopulation > nigeriaPopulation;
const averageCountryPopulation = 33000000;
const isNigeriaMorePopulated = nigeriaPopulation > averageCountryPopulation;
const description = `portugal is in europe, and its 11 million people speak portugese`;
console.log(
  description,
  nigeriaPopulation,
  isFinlandMorePopulated,
  countryHalfPopulation,
  isNigeriaMorePopulated,
);
// coding challenge
let massMark = 78; //KG
const heightMark = 1.69; //M
let massJohn = 92; //KG
const heightJohn = 1.95; //M
let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn, bmiMark);
const isMarkBmiHigher = bmiMark > bmiJohn;
console.log(isMarkBmiHigher);
// Template literal && conditional statement
if (isMarkBmiHigher) {
  console.log(`mark's BMI (${bmiMark})is higher than John's BMI (${bmiJohn})`);
} else {
  console.log(`john's BMI (${bmiJohn})is higher than Mark's BMI (${bmiMark})`);
}
// if/else statement Assigment
if (nigeriaPopulation > 33000000) {
  console.log(`portugal's population is 22 million below average`);
} else {
  console.log(`${country} population is below average aswell`);
}
// Type conversion and coercion
console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2);
// equality operator
// const numNeigbours = Number(
//   prompt(`how many neigbour countries does your country have?`)
// );
// if (numNeigbours === 1) {
//   console.log(`only 1 border`);
// } else if (numNeigbours > 1) {
//   console.log(`more than 1 border`);
// } else {
//   console.log(`no border`);
// }
//logical operators
//sarah's need
const sarahLanguagePreference = `English`;
const sarahPopulationPreference =
  nigeriaPopulation > 1 && nigeriaPopulation < 50000000;
const isIslandSarah = false;

if (
  language === sarahLanguagePreference &&
  sarahPopulationPreference &&
  isIsland === isIslandSarah
) {
  console.log(`you should live in Nigeria`);
} else {
  console.log(`Nigeria does not meet your standard`);
}

//tenary operator
const sarahPreference =
  language === sarahLanguagePreference &&
  sarahPopulationPreference &&
  isIsland === isIslandSarah
    ? `you should live in Nigeria`
    : `Nigeria does not meet your standard`;
console.log(sarahPreference);
// CODING  CHALLENGE(Ternary operator, template literal and logic operator)
const bill = 275;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
const totalValue = tip + bill;
console.log(totalValue);
console.log(`tip value is ${tip}`);
//switch statement
language = `chinese`;
let languageIdentity;
switch (language) {
  case `chinese`:
  case `mandarin`:
    languageIdentity = `Most number of native speakers!`;
    break;
  case `spanish`:
    languageIdentity = `2nd place in number of native speakers`;
    break;
  case `english`:
    languageIdentity = `3rd place`;
    break;
  case hindi:
    languageIdentity = `numbere 4`;
    break;
  case `arabic`:
    languageIdentity = `5th most spoken language`;
    break;
  default:
    languageIdentity = `Great language too:D`;
}
console.log(languageIdentity);

let day = 4;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Output: Wednesday

//ternary operator Assignment
const populationComparism =
  nigeriaPopulation > 33000000
    ? `${country} population is above average`
    : `${country} population is below average`;
console.log(populationComparism);

//CHALLENGE ON FUNCTION first try;

const calAverage = (score1, score2, score3) => {
  const averageScore = (score1 + score2 + score3) / 3;
  return averageScore;
};
const scoreDophins = calAverage(85, 54, 41);
const scoreKoalas = calAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  let potentialWinner;
  if (avgDolphins >= avgKoalas * 2) {
    potentialWinner = `team Dolphins win ${avgDolphins} vs ${avgKoalas}`;
  } else if (avgKoalas >= avgDolphins * 2) {
    potentialWinner = `team Koalas win ${avgKoalas} vs ${avgDolphins}`;
  } else {
    potentialWinner = `No team wins`;
  }
  return potentialWinner;
};
const winner = checkWinner(scoreDophins, scoreKoalas);
console.log(winner);
//ASSIGNMENT ON FUNCTION
const describeCountry = function (country, Population, capitalCity) {
  return `${country} has ${Population} people and its capital city is ${capitalCity}`;
};
const definedCountry1 = describeCountry(country, nigeriaPopulation, `Abuja`);
const definedCountry2 = describeCountry(`Ghana`, `50 million`, `Accra`);
const definedCountry3 = describeCountry(
  `South Africa`,
  `60 million`,
  `cape town`,
);
console.log(definedCountry1);
console.log(definedCountry2);
console.log(definedCountry3);

//Assignment of function declaration and function expression

function percentageOfWorld1(countryName, population) {
  return `${countryName} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population.`;
}
console.log(percentageOfWorld1(country, 120));
console.log(percentageOfWorld1(`South Africa`, 70));
console.log(percentageOfWorld1(`Ghana`, 50));
//Assignment of function expression

const percentageOfWorld2 = function (countryName, population) {
  return `${countryName} has ${population} million people, so it's about ${
    (population / 7900) * 100
  }% of the world population.`;
};
console.log(percentageOfWorld2(country, 220));
console.log(percentageOfWorld2(`South Africa`, 70));
console.log(percentageOfWorld2(`Ghana`, 50));
//Assignment on Arrow function
('use strict');

const percentageOfWorld3 = (population) =>
  ((population / 7900) * 100) % console.log(percentageOfWorld2(country, 220));

//Assignment on function calling other function

const describePopulation = function (countryName, population) {
  //This function calculates the percentage of the population;
  const percentageOfWorld3 = (population) => (population / 7900) * 100;
  const percent = percentageOfWorld3(population);

  return `${countryName} has ${population} million people, which is about ${percent}% of the world`;
};
console.log(describePopulation(country, 120));
console.log(describePopulation(`Ghana`, 40));
console.log(describePopulation(`Russia`, 100));
console.log();
console.log();

//challenge on Array in tip calculator.
const bills = [125, 555, 44];
const tips = [];
const calcTip = function (billz) {
  if (billz >= 50 && billz <= 300) {
    tip = billz * 0.15;
  } else {
    tip = billz * 0.2;
  }
  return tip;
};
tips.unshift(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));
tips.push;
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
