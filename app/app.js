var surveyResults = [
    {
        name: "Ansar",
        scores: [4,20]
    },
    {
        name: "Manahil",
        scores: [9,4]
    },
    {
        name: "Man",
        scores: [1,24]
    },
    {
        name: "Test",
        scores: [18,87]
    }
];

obj = {
    name: 'Ans',
    scores: [7,3]
}


var diff = [];
var allSums = [];

surveyResults.forEach((ele, ind, arr) => {
    ele.scores.forEach((element, index, array) => {
        var sub = Math.abs(ele.scores[index] - obj.scores[index]);
        diff.push(sub);
    });
    var sum = diff.reduce(function(a, b) { return a + b; }, 0);
    allSums.push(sum);
    diff = [];
});

console.log(allSums);

var indexOfSmall = function (a) {
    return a.indexOf(Math.min.apply(Math, a));
   }

var matchInd = indexOfSmall(allSums);
var match = surveyResults[matchInd].name

console.log(`The match is ${match}`);