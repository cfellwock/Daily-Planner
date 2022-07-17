// WHEN I open the planner, the current day is displayed at the top of the calendar
let today = moment()
    $("#currentDay").text("Today is " + today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    today.setInterval(update, 1000);




// WHEN I scroll down, I am presented with time blocks for standard business hours

// WHEN I view the time blocks for that day, each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block, I can enter an event

// WHEN I click the save button for that time block, the text for that event is saved in local storage

// WHEN I refresh the page, the saved events persist
update();