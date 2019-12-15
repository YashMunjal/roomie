
AOS.init({
  duration: 1500,
})

$(document).ready(function () {
  $('.flat-block').hide();
  $('.independent-block').hide();

  $('.prop-one').click(function () {
    $('.prop-one').addClass('prop-selected');

    if ($('.prop-two').hasClass('prop-selected')) {
      $(('.prop-two').removeClass('prop-selected'));
    }
    if ($('.prop-three').hasClass('prop-selected')) {
      $('.prop-three').removeClass('prop-selected');
    }

    $('.independent-block').hide();
    $('.flat-block').hide();
    $('.pg-block').show();
  });

  $('.prop-two').click(function () {
    $('.prop-two').addClass('prop-selected');
    if ($(".prop-one").hasClass('prop-selected')) {
      $('.prop-one').removeClass('prop-selected');
    }
    if ($('.prop-three').hasClass('prop-selected')) {
      $(this).removeClass('prop-selected');
    }
    $('.independent-block').hide();
    $('.pg-block').hide();
    $('.flat-block').show();
  });

  $('.prop-three').click(function () {
    $('.prop-three').addClass('prop-selected');

    if ($(".prop-two").hasClass('prop-selected')) {
      $('.prop-two').removeClass('prop-selected');
    }
    if ($('.prop-one').hasClass('prop-selected')) {
      $(this).removeClass('prop-selected')
    }
    $('.pg-block').hide();
    $('.flat-block').hide();
    $('.independent-block').show();
  });
});