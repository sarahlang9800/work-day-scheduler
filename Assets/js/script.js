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
  var hr9 = $("#hour-9").siblings('textarea').text()
  var hr10 = $("#hour-10").siblings('textarea').text()
  var hr11 = $("#hour-11").siblings('textarea').text()
  var hr12 = $("#hour-12").siblings('textarea').text()
  var hr13 = $("#hour-13").siblings('textarea').text()
  var hr14 = $("#hour-14").siblings('textarea').text()
  var hr15 = $("#hour-15").siblings('textarea').text()
  var hr16 = $("#hour-16").siblings('textarea').text()
  var hr17 = $("#hour-17").siblings('textarea').text()
  localStorage.getItem(hr9, hr10, hr11, hr12, hr13, hr14, hr15, hr16, hr17)
  console.log(localStorage)
}
