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

