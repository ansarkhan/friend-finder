var path = require("path");
var surveyResults = require("../data/friends");

module.exports = function(app) {

    app.post("/api/survey",function(req,res) {
        var diff = [];
        var allSums = [];

        console.log(surveyResults);
        console.log(req.body);

        surveyResults.forEach((ele, ind, arr) => {
            ele.scores.forEach((element, index, array) => {
                var sub = Math.abs(ele.scores[index] - req.body.scores[index]);
                diff.push(sub);
            });
            var sum = diff.reduce(function(a, b) { return a + b; }, 0);
            allSums.push(sum);
            diff = [];
        });

        var indexOfSmall = function (a) {
            return a.indexOf(Math.min.apply(Math, a));
           }
        
        var matchInd = indexOfSmall(allSums);
        var match = surveyResults[matchInd].name
        
        console.log(`The match is ${match}`);

        
        surveyResults.push(req.body);
        console.log(surveyResults);
        

        return res.json(match);
    })

    app.get("/api/survey", function(req,res) {
        return res.json(surveyResults);
    });
};


