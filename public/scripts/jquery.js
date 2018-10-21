$(document).ready(function () {
  console.log('ready!');

  $('.burgers-title').on('click', function () {
    $('.burgers-div').slideToggle('slow');
  });
  $('.sides-title').on('click', function () {
    $('.sides-div').slideToggle('slow');
  });
  $('.drink-title').on('click', function () {
    $('.drink-div').slideToggle('slow');
  });


  $('#confirm').click(function () {
    $('#confirm').removeAttr();
    $('#confirm-text').remove();
    $.ajax('/twilio', {
      method: 'GET'
    });
    $('#confirm').unbind('click');
    $('#confirm').prepend('<p id="confirmed">Time Until Ready: -Check Phone- <p>');

  });
});
