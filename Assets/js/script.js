// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn"t run until the browser has finished rendering all the elements
// in the html

// display current date and time on page 
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMM D, YYYY"));

var displayHr9 = $("#hour1")
var displayHr10 = $("#hour2")
var displayHr11 = $("#hour3")
var displayHr12 = $("#hour4")
var displayHr1 = $("#hour5")
var displayHr2 = $("#hour6")
var displayHr3 = $("#hour7")
var displayHr4 = $("#hour8")
var displayHr5 = $("#hour9")

var displayHrArr = [displayHr9, displayHr10, displayHr11, displayHr12, displayHr1, displayHr2, displayHr3, displayHr4, displayHr5];

var hr9 = dayjs().set("hour", 09).set("minute", 00)
var hr10 = dayjs().set("hour", 10).set("minute", 00)
var hr11 = dayjs().set("hour", 11).set("minute", 00)
var hr12 = dayjs().set("hour", 12).set("minute", 00)
var hr1 = dayjs().set("hour", 13).set("minute", 00)
var hr2 = dayjs().set("hour", 14).set("minute", 00)
var hr3 = dayjs().set("hour", 15).set("minute", 00)
var hr4 = dayjs().set("hour", 16).set("minute", 00)
var hr5 = dayjs().set("hour", 17).set("minute", 00)

var hrArr = [hr9, hr10, hr11, hr12, hr1, hr2, hr3, hr4, hr5];

// window.onload = function setCalendar() {
//   var arrayLength = hrArr.length;
//   for (var i = 0; i < arrayLength; i++) {
//     var original = document.getElementById("calendarHrs");
//     var clone = original.cloneNode(true);
//     clone.removeAttribute("calendarHrs");
//     document.getElementById("calendarHrs").appendChild(clone);
//     console.log(hrArr[i]);
// }
//   console.log(original);
// }

function setCalendar() {
  for (var i = 1; i <= displayHrArr.length; i++) {
    var parentDiv = document.getElementById(`hour${index}`)
    var hourSpan = document.getElementById(`time${index}`)
    

    // get innerhtml cast it to a number
    // if else weather number is current 
    // add class to parent div
    // if number is between 1+5 add 12 to number
  }
}
// dynamicaly add a class of dif colors 

// for loop loops through adds color when the time is right

// print a 24hr list with adjustable text to input todos maybe have a todos and a draggable box to put it in the time it needs to be done?

// set past time to grey, present time to red, set future time to green



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.




