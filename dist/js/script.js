"use strict";

$(document).ready(function () {
  // События клика на гамбургер
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('hamburger-active');

    if ($('.hamburger').hasClass('hamburger-active')) {
      $('.menu').addClass('menu-active');
      $('body').css({
        'overflow': 'hidden'
      });
    } else {
      $('.menu').removeClass('menu-active');
      $('body').css({
        'overflow': 'visible'
      });
    }
  }); // Модальное окно "Закрыть"

  $('.close').click(function () {
    $('.modal').fadeOut();
    $('body').css({
      'overflow': 'visible'
    });
  }); // Модальное окно "Открыть"

  $('.js-modal').click(function () {
    $('.modal').fadeIn();
    $('body').css({
      'overflow': 'hidden'
    });
  });
});