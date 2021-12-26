// create a function available after the document is loaded.
// create a moment.js.
// create a button that saves information.
// create a local storage for each div box.
// create a time tracker.
// create a loop.
// create a diffrent tracker for past, present, and future. 

function hourTracker() {

    // displays the current time and date with moment.js
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // saveBtn click listener to save the text input.
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

        // save inputs in localStorage.
        localStorage.setItem(time, text);
    })
    // get current number of hours.
    var currentHour = moment().hour();

    // loop over time blocks, checks for past, present and future with help from css
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
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

}
// starts funtion over again.
hourTracker();