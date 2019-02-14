'use strict';

$(document).ready(function() {

$(".js-range-price").ionRangeSlider({
  type: "double",
  postfix:"руб"
});

$(".js-range-time").ionRangeSlider({
  type: "double",
  values: [
      "0:00", "1:00", "2:00", "3:00", "4:00", "5:00",
      "6:00", "7:00", "8:00", "9:00", "10:00", "11:00",
      "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
      "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "23:59"
  ]
});
// $(".teachers__time-btn").click(function(e) {
//   $(".teachers__field--time").prepend($(".teachers__time-field"));
// });
$(".teachers__banner-close").click(function(e) {
  $(this).parent().hide();
});
$(".teachers__tag").click(function(e) {
  $(this).hide();
});
$(".teachers__teacher-like").click(function(e) {
  $(this).toggleClass("liked");
});
$(".info__person").click(function(e) {
  $(this).toggleClass("info__person--active");
  $(".user-menu").toggleClass("user-menu--active");
});

$(".teachers__tabs-item").click(function(e) {
  $(".teachers__tabs-content").hide();
  $(".teachers__tabs-item").removeClass("teachers__tabs-item--active");
  $(this).addClass("teachers__tabs-item--active");
});

$(".teachers__tabs-item--video").click(function(e) {
  $(".teachers__tabs-content--video").show();
});

$(".teachers__tabs-item--about").click(function(e) {
  $(".teachers__tabs-content--about").show();
});

$(".teachers__tabs-item--schedule").click(function(e) {
  $(".teachers__tabs-content--schedule").show();
});

$('select').styler();

$(".teachers__tags-list-close").click(function(e) {
  $(this).parent().hide();
  $(".teachers__tag--btn").show();
});

$(".teachers__tag--btn").click(function(e) {
  $(this).hide();
  $(".teachers__tags-list").show();
});


$(".courses__item-btn").click(function(e) {
  $(".courses__info").hide();
  $(this).parent().parent().css("max-height", "1500px");
  $(this).parent().parent().children(".courses__info").show();
  $('html, body').animate({
  scrollTop: $(this).parent().parent().children(".courses__info").offset().top - 200
}, 'slow');
});
$(".courses__info-close").click(function(e) {
  $(this).parent().slideUp();
});


});
