// create a function available after the document is loaded.
// create a moment.js.
// create a button that saves information.
// create a local storage for each div box.
// create a time tracker.
// create a loop.
// create a diffrent tracker for past, present, and future. 

$(document).ready(function() {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function() {
        var userText = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");
        console.log(this);

        localStorage.setItem(userText, time);
    })

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    console.log(localStorage);
})