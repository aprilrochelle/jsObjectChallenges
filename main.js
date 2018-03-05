// Challenge 1
var players = [
    { 
    name: "Bob", 
    scores: [10, 65]
    }, 
    { 
    name: "Bill", 
    scores: [90, 5]
    }, 
    { 
    name: "Charlie",
    scores: [40, 55] 
    }
];

// for loop, loop through the players
  //inside the for loop, add the scores together and place in array
//first, check if all scored more than 100, if true, everyone loses
//compare array, whose is highest?
  //if a tie occurs, the first person to spin wins
var totals = [];
for (var i=0; i<players.length; i++) {
    // for (var j=0; j<players[i].scores.length; j++) {
    totals.push(players[i].scores[0] + players[i].scores[1]);
    // };
};

var highScore = Math.max.apply(Math, totals);
var output;
for (var i=0; i<totals.length; i++) {
    if (totals[i] === highScore && totals[i] <= 100) {
        output = players[i].name;
        break;
    } else if (totals[i] > 100) {
        output = 'false';
    };
};
document.getElementById('challenge1').innerHTML += '<p>' + output + '</p>';

var players = [
    { 
    name: "Bob",
    scores: [15, 20]
    },
    {
    name: "Bill",
    scores: [10, 15]
    },
    {
    name: "Charlie",
    scores: [90, 10]
    }
];

var totals = [];
for (var i=0; i<players.length; i++) {
    totals.push(players[i].scores[0] + players[i].scores[1]);
};
var highScore = Math.max.apply(Math, totals);
var output;
for (var i=0; i<totals.length; i++) {
    if (totals[i] === highScore && totals[i] <= 100) {
        output = players[i].name;
        break;
    } else if (totals[i] > 100) {
        output = 'false';
    };
};
document.getElementById('challenge1').innerHTML += '<p>' + output + '</p>';

// Challenge 2
// loop over list of winners
// total for each country in the list


var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];


var countryNames = [];
for (var i=0; i<winnerList.length; i++) {
    countryNames.push(winnerList[i].country);
};

var country = { };
for (var i = 0, j = countryNames.length; i < j; i++) {
    // if (countryNames.indexOf(countryNames[i]) >= 0) {
    country[countryNames[i]] = (country[countryNames[i]] || 0) + 1;
    // } else {
    //     document.getElementById('challenge2').innerHTML += 0;
    // }
};
var winningDiv = document.getElementById('challenge2');
var countryList = '<p>' + country['Spain'] + '</p>';
countryList += '<p>' + country['Portugal'] + '</p>';
// countryList += '<p>' + country['Russia'] + '</p>';
winningDiv.innerHTML += countryList;

// Challenge 3

var test1 = {
    a: 5,
    b: 2,
    operator: "add"
};

var result;
if (test1.operator === "add") {
    result = test1.a + test1.b;
} else if (test1.operator === 'subtract') {
    result = test1.a - test1.b;
} else if (test1.operator === 'multiply') {
    result = test1.a * test1.b;
} else if (test1.operator === 'divide') {
    result = test1.a / test1.b;
};

document.getElementById('challenge3').innerHTML += '<p>' + result + '</p>';

var test1 = {a: 5, b:2, operator: "subtract"};
var result;
if (test1.operator === "add") {
    result = test1.a + test1.b;
} else if (test1.operator === 'subtract') {
    result = test1.a - test1.b;
} else if (test1.operator === 'multiply') {
    result = test1.a * test1.b;
} else if (test1.operator === 'divide') {
    result = test1.a / test1.b;
};

document.getElementById('challenge3').innerHTML += '<p>' + result + '</p>';

var test1 = {a: 5, b:2, operator: "multiply"};
var result;
if (test1.operator === "add") {
    result = test1.a + test1.b;
} else if (test1.operator === 'subtract') {
    result = test1.a - test1.b;
} else if (test1.operator === 'multiply') {
    result = test1.a * test1.b;
} else if (test1.operator === 'divide') {
    result = test1.a / test1.b;
};

document.getElementById('challenge3').innerHTML += '<p>' + result + '</p>';

var test1 = {a: 5, b:2, operator: "divide"};
var result;
if (test1.operator === "add") {
    result = test1.a + test1.b;
} else if (test1.operator === 'subtract') {
    result = test1.a - test1.b;
} else if (test1.operator === 'multiply') {
    result = test1.a * test1.b;
} else if (test1.operator === 'divide') {
    result = test1.a / test1.b;
};

document.getElementById('challenge3').innerHTML += '<p>' + result + '</p>';


// Challenge 5

var candidate1 = {
    minSalary: 120000
  };
  let job1 = {
    maxSalary: 140000
  }

  var output;
  if (candidate1.minSalary <= (job1.maxSalary - 14000)) {
    output = true;
  } else {
      output = false;
  };
  var acceptDiv = document.getElementById('challenge5');
  acceptDiv.innerHTML += '<p>' + output + '</p>';


  var candidate1 = {
    minSalary: 950000
  };
  let job2 = {
    maxSalary: 100000
  };
  if (candidate1.minSalary <= (job2.maxSalary - 10000)) {
    output = true;
  } else {
      output = false;
  };
  var acceptDiv = document.getElementById('challenge5');
  acceptDiv.innerHTML += '<p>' + output + '</p>';