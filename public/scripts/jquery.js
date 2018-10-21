$( document ).ready(function() {
  console.log( "ready!" );

  $('.burgers-title').on('click', function(){
    $('.burgers-div').slideToggle('slow');
  });
  $('.sides-title').on('click', function(){
    $('.sides-div').slideToggle('slow');
  });
  $('.drink-title').on('click', function(){
    $('.drink-div').slideToggle('slow');
  });
});


// $("#tweet-container").on("mouseover", ".tweet-box", function () {
//   $(this).css({
//     "border": "1.7px solid rgba(128, 128, 128, 1)"
//   });
//   $(this).find(".tweet-header").css({
//     "opacity": "1"
//   });
// })

// class="drink-title"
// class="drink-div"