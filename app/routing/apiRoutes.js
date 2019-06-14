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
};

// Compare new survey object to survey array
function findFriend(newFriend, friends) {
    var diff = 0;
    var myBestFriend = {
        name: "",
        photo: "",
        rating: 100
    };
    for (var i = 0; i < newFriend.scores.length; i++) {
        for (var j = 0; j < friends.length - 1; j++) {
            diff += Math.abs(friends[j].scores[i] - newFriend.scores[i]);
            if (diff <= myBestFriend.rating) {
                myBestFriend.name = friends[j].name,
                myBestFriend.photo = friends[j].photo,
                console.log(myBestFriend);
            }
        }
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

