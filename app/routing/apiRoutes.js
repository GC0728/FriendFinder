var friends = require("../data/friends");

// Convert the survey.scores from an array of strings to an array of integers
function numTheSurvey(num) {
    return parseInt(num);
};

// POST Survey data
function friend(req, res) {
    var newFriend = req.body;
    var numScores = newFriend.scores.map(numTheSurvey);
    newFriend.scores = numScores;
    friends.push(newFriend);
    res.json(friends);
    findFriend(newFriend, friends)
 //   console.log(friends);
};

// Compare new survey object to survey array
function findFriend(newFriend, friends) {
    var comparison = 0;
 //   console.log(newFriend.scores.length);
    for (var i = 0; i < newFriend.scores.length; i++) {
        var diff = newFriend.scores[i];
        comparison += diff;
        console.log(diff);
    //    console.log(friends[i].scores.length);
    }
    };



module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
            res.json(friends);

    }),

    app.post("/api/friends", function(req, res) {
        friend(req, res);

    })
// NEW USER INPUT DATA BEING SENT TO /API/FRIENDS ROUTE        

//  ALL FRIENDS POSTED TO /API/FRIENDS ROUTE        

};

