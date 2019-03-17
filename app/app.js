// list of all existing results in the application
var surveyResults = [
    {
        name: "Test1",
        scores: [4,20]
    },
    {
        name: "Test2",
        scores: [9,4]
    },
    {
        name: "Test3",
        scores: [1,24]
    },
    {
        name: "Test4",
        scores: [18,87]
    }
];

// information for person who just filled out the form
obj = {
    name: "Test5",
    scores: [7,3]
}

// array to store the differences between the person filling out the form and the existing entries
var diff = [];

// array that will store all the sums of the differences
var allSums = [];

// loop through the existing entries
surveyResults.forEach((ele, ind, arr) => {
    // loop through the scores array for existing entries
    ele.scores.forEach((element, index, array) => {
        // subtract from the current entry and push to diff arr
        var sub = Math.abs(ele.scores[index] - obj.scores[index]);
        diff.push(sub);
    });
    // sum up the values of the differences between current entry and one of the existing entries
    var sum = diff.reduce(function(a, b) { return a + b; }, 0);
    // pushes the sum to the allSums arr
    allSums.push(sum);
    // since sum is stored, diff arr can be cleared before next existing entry is compared to curren entry
    diff = [];
});


// find the index of the smallest sum in the allSums array
var indexOfSmall = function (a) {
    return a.indexOf(Math.min.apply(Math, a));
   }

// use the index to pull the best match from the original array of existing entries
var matchInd = indexOfSmall(allSums);
var match = surveyResults[matchInd].name

// console log the perfect match!
console.log(`The match is ${match}`);