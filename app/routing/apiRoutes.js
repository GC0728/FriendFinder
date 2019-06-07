var friends = require("../data/friends");

function matchMaker() {
// GET THE ARRAY LENGTH OF FRIENDSTOMATCH
    for (var i; i < friends.length; i++) {

    }
// LOOP THROUGH FRIENDSTOMATCH AND SUBTRACT CORRESPONDING ARRAY ELEMENTS


};

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);

    }),

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(friends);
    })
// NEW USER INPUT DATA BEING SENT TO /API/FRIENDS ROUTE        

//  ALL FRIENDS POSTED TO /API/FRIENDS ROUTE        

};

