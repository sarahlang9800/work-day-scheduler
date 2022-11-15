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
  renderInput()
})

// makes the users saved input persist even when the page reloads
function renderInput() {
  var hr9 = $("#hour-9 .description").val(localStorage.getItem('hour-9'))
  var hr10 = $("#hour-10 .description").val(localStorage.getItem('hour-10'))
  var hr11 = $("#hour-11 .description").val(localStorage.getItem('hour-11'))
  var hr12 = $("#hour-12 .description").val(localStorage.getItem('hour-12'))
  var hr13 = $("#hour-13 .description").val(localStorage.getItem('hour-13'))
  var hr14 = $("#hour-14 .description").val(localStorage.getItem('hour-14'))
  var hr15 = $("#hour-15 .description").val(localStorage.getItem('hour-15'))
  var hr16 = $("#hour-16 .description").val(localStorage.getItem('hour-16'))
  var hr17 = $("#hour-17 .description").val(localStorage.getItem('hour-17'))
  window.localStorage.getItem(hr9, hr10, hr11, hr12, hr13, hr14, hr15, hr16, hr17)
}
renderInput()