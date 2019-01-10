$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });

  // Gallery
  baguetteBox.run('.compact-gallery', { animation: 'slideIn'});

  // Carousell
  $('.carousel').carousel();
})

/*Smooth Scroll*/
$(document).ready( function() { 
  $('.smooth a').smoothScroll({
  	speed: 'auto',
  	offset:-70,
    // afterScroll: function() {
    //   location.hash = $(this).attr('href');
    // }
  });
});
