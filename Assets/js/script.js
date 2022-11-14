
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
function renderInput() {
  var lastInput = JSON.parse(localStorage.getItem("mainDiv"));
  return lastInput
  }
