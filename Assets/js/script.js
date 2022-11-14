
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

var saveBtn = $('.saveBtn')

saveBtn.on('click', function(event) {
  event.preventDefault();
  var input = $(event.target).siblings('textarea').val()
  var mainDiv = $(event.target).parent('div').attr('id')
  localStorage.setItem(mainDiv, input)
  renderInput()
})

function renderInput() {
  var lastInpu = JSON.parse(localStorage.getItem("input"));
  return
  }
