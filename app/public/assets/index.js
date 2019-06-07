// GLOBAL VARIABLES
var friendName = $("#nameInput");
var friendPhoto = $("#pictureUpload");

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
        name: friendName.val(),
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
    };
    $.ajax({
        url: "/api/friends",
        data: newFriend,
        method: "POST"
    }).then(function(data){
        console.log(data);
    });
    $(".user-a").val("");
};


// CREATE USER RATINGS PROFILE
function createFriend(event) {
    event.preventDefault();
    getSurvey();
};

// Variable to store route to Survey
function takeSurvey(trigger) {
    trigger.preventDefault();
    window.location.href = "/survey";
}; 

// DOM EVENTS
$(".btn").on("click", createFriend);
$(".btn").on("click", takeSurvey);

