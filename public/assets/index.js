
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
    var friend = {
        name: friendName.val(),
        photo: friendPhoto.val(),
        scores: [
            $("#a1").val(),
            $("#a2").val(),
            $("#a3").val(),
            $("#a4").val(),
            $("#a5").val(),
            $("#a6").val(),
            $("#a7").val(),
            $("#a8").val(),
            $("#a9").val(),
            $("#a10").val(),
        ]
    };
    $.ajax({
        url: "/api/friends",
        data: friend,
        method: "POST"
    }).then(function(data){
        console.log(data);
        $("#foundFriendName").text(data.name);
        $("#foundFriendPhoto").attr("src", data.photo);
    });
    $(".user-a").val("");
};

// CREATE USER RATINGS PROFILE
function createFriend(event) {
    event.preventDefault();
    getSurvey();
    showMatch();
};

// Variable to store route to Survey
function takeSurvey(trigger) {
    trigger.preventDefault();
    window.location.href = "/survey";
}; 

// Toggle Modal
function showMatch() {
    $("#findFriend").modal("show");
};

// DOM EVENTS
$("#surveyForFriends").on("click", takeSurvey);
$("#matchFriend").on("click", createFriend);
