/*Images Galery - GalerÃ­a de imÃĄgenes*/
$(window).load(function() {
    jQuery('.masonry-container').masonry({
      itemSelector: '.work-masonry-thumb',
      columnWidth: 159 /* the margins are 7px - los mÃĄrgenes son de 7px*/
  });
});

/*LightBox */
$(document).ready(function() {
  $(".single").fancybox();
});

/*Slides 1 - Diapositivas*/
$(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 589
      });
    });

/*Slides 2 - Diapositivas*/

$(function(){
      $("#slides2").slidesjs({
        width: 930,
        height: 300
      });
    });

/*Smooth Scroll - Desplazamiento Lento*/
$(document).ready( function() {
      
      $('.second-nav a').smoothScroll({
        afterScroll: function() {
          location.hash = $(this).attr('href');
        }
      });
  });