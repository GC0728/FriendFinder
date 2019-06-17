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
    res.json(findFriend(newFriend, friends));
    
};

// Compare new survey object to survey array
function findFriend(newFriend, friends) {
    var diff = 0;
    var myBestFriend = {
        name: "",
        photo: "",
        rating: 100
    };
    for (var i = 0; i < friends.length -1; i++) {
        diff = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            diff += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
        }
        if (diff <= myBestFriend.rating) {
            myBestFriend.name = friends[i].name,
            myBestFriend.photo = friends[i].photo,
            myBestFriend.rating = diff
            //console.log(myBestFriend.photo);
            }
    }
    return myBestFriend;
};

// Function to send myBestFriend name and photo to modal to display on HTML
function showBestFriend(name, photo) {
    $("#foundFriendName").val(name);
 //   $("#friendPhoto").attr("src", photo);
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

