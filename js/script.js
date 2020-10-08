$(document).ready(function() {
	new WOW().init();
});


/*Dynamic-text*/

var typed = new Typed(".dynamic-text span", {
  strings: ["Zahar Melnik.", "Frontend developer."],
  loop: true,
  typeSpeed: 50,
  backSpeed : 50,
  startDelay: 0,
  backDelay: 2000
});


/*activation*/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});