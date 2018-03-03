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