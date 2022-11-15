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
  $("#hour-9 .description").val(localStorage.getItem('hour-9'))
  $("#hour-10 .description").val(localStorage.getItem('hour-10'))
  $("#hour-11 .description").val(localStorage.getItem('hour-11'))
  $("#hour-12 .description").val(localStorage.getItem('hour-12'))
  $("#hour-13 .description").val(localStorage.getItem('hour-13'))
  $("#hour-14 .description").val(localStorage.getItem('hour-14'))
  $("#hour-15 .description").val(localStorage.getItem('hour-15'))
  $("#hour-16 .description").val(localStorage.getItem('hour-16'))
  $("#hour-17 .description").val(localStorage.getItem('hour-17'))
}
renderInput()