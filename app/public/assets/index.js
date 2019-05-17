// GLOBAL VARIABLES
var friendName = $("#nameInput");
var friendPhoto = $("#pictureUpload");
surveyRatings = [];

// FUNCTION TO GET FRIENDS
function getFriends() {
    $.ajax({
        url: "/api/friends",
        method: "GET",
    }).then(function(data) {
        console.log(data);
    })
};

// STORE USER DROPDOWN VALUES
function getSurvey() {
    var newFriend = {
        name: friendName.val().trim(),
        photo: friendPhoto.val(),
        scores: [
            Number($("#a1").val()),
            Number($("#a2").val()),
            Number($("#a3").val()),
            Number($("#a4").val()),
            Number($("#a5").val()),
            Number($("#a6").val()),
            Number($("#a7").val()),
            Number($("#a8").val()),
            Number($("#a9").val()),
            Number($("#a10").val()),
        ]
    }
    surveyRatings.push(newFriend);
    console.log(newFriend);
};


// CREATE USER RATINGS PROFILE
function createFriend(event) {
    event.preventDefault();
    getSurvey();
    $.ajax({
        url: "/api/friends",
        data: surveyRatings,
        method: "POST"
    }).then(function(data){
        getFriends();
    });
};

// DOM EVENTS
$(".btn").on("click", createFriend);

