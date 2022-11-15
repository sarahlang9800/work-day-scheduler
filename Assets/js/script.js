// display current date and time on page 
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));


$('.time-block').each(function () {
  var blockHour = parseInt($(this).attr('id').split('-')[1]);
  if (blockHour < dayjs().hour()) {
    $(this).addClass('past');
  }else if (blockHour > dayjs().hour()) {
    $(this).addClass('future');
  }else {
    $(this).addClass('present')
  }
})

// saves the users input to local storage
var saveBtn = $('.saveBtn')

saveBtn.on('click', function(event) {
  event.preventDefault();
  var input = $(event.target).siblings('textarea').val()
  var mainDiv = $(event.target).parent('div').attr('id')
  localStorage.setItem(mainDiv, input)
})

// makes the users saved input persist even when the page reloads
var displayHr9 = $("#hour-9")
var displayHr10 = $("#hour-10")
var displayHr11 = $("#hour-11")
var displayHr12 = $("#hour-12")
var displayHr1 = $("#hour-13")
var displayHr2 = $("#hour-14")
var displayHr3 = $("#hour-15")
var displayHr4 = $("#hour-16")
var displayHr5 = $("#hour-17")
// function renderInput() {
//   var lastInput = $(this).parent().attr('id').split('hour-9')[0]);
//   }
