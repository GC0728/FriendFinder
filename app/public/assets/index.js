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

// Modal Events
// var modal = $(".modal");
// var trigger = $(".trigger");
// var closeButton = $(".close-button");

// function toggleModal() {
//     $(".modal").toggle();
//     console.log("click worked!")
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// Toggle Modal
// function showMatch(event) {
//     $("#findFriend").modal("toggle");
// };

// DOM EVENTS
$(".btn").on("click", createFriend);
$(".btn").on("click", takeSurvey);
// $(".btn").on("click", $("#findFriend").modal("toggle"));
// $("#findFriend").modal("toggle");
// $(".btn").on("click", showMatch);
// $(trigger).on("click", toggleModal);
// $(closeButton).on("click", toggleModal);
// $(window).on("click", windowOnClick);
