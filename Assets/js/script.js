// WHEN I open the planner, the current day is displayed at the top of the calendar
let today = moment()
    $("#currentDay").text("Today is " + today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    // today.setInterval(update, 1000);


// WHEN I view the time blocks for that day, each time block is color-coded to indicate whether it is in the past, present, or future


function timeKeeper() {
let currentHour = moment().hour();

    let blockHour = [];
    $('.row').each(function() {
        if($(this).hasClass('time-block')) {
            blockHour.push($(this).prop('id').split('hour')[1]);
        }
    });
    console.log(blockHour)

    if (currentHour < blockHour) {
        $('.time-block').toggleClass("past")

    }

};

// can i add a filler class into this to avoid writing 9 lines of code?

// WHEN I click the save button for that time block, the text for that event is saved in local storage

// WHEN I refresh the page, the saved events persist
