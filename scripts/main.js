// javascript wizardry
$(function(){
  $('.text-container').css('position','absolute');
  $('.text-container').css('top', Math.max(0, (($(window).height() - $('.text-container').outerHeight()) / 2) + $(window).scrollTop()) + "px");
  // $('.text-container').css('left', Math.max(0, (($(window).width() - $('.text-container').outerWidth()) / 2) + $(window).scrollLeft()) + "px");

  $(window).resize(function() {
    $('.text-container').css('position','absolute');
    $('.text-container').css('top', Math.max(0, (($(window).height() - $('.text-container').outerHeight()) / 2) + $(window).scrollTop()) + "px");
    // $('.text-container').css('left', Math.max(0, (($(window).width() - $('.text-container').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  });
});

$(function(){
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  $('body').css('height', viewportHeight + 'px');
  $('body').css('width', viewportWidth + 'px');

  $(window).resize(function() {
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();

      $('body').css('height', viewportHeight + 'px');
      $('body').css('width', viewportWidth + 'px');
  });
});

jQuery(document).ready(function(){
  var c = new Clock();
  window.setInterval(function(){
    c.update();
    // console.log(c.getTime());
  }, 1000);

  $(".element").typed({
    strings: ["Hi, there!", c.greeting, "My name is Pi and I'm a clock.","Do you happen to know what time is it? I seem to have forgotten.", "Oh I am just joking.", "It's " + c.time, c.dayOfWeek],
    // strings: ["It's " + c.getTime()],
    typeSpeed: 25,
    backSpeed: 0,
    backDelay: 2000,
    startDelay: 5000,
    loop: 0,
    callback: function() {
    },
  }).delay(500);

});

var Clock = function(){
  this.update();
  this.greeting();
  this.dayOfWeek();
}

Clock.prototype.getTime = function() {
  return this.time;
};

Clock.prototype.update = function() {
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes();
  var hour = date.getHours();

  if (minute < 10){
    minute = '0' + String(minute);
  }
  if (minute < 10){
    second = '0' + String(second);
  }

  this.time = String(hour) + ':' + String(minute) + ':' + String(second);
  // this.time = String(hour) + ':' + String(minute);
}

Clock.prototype.greeting = function(){
  var date = new Date();
  var hour = date.getHours()
  var intro = "I hope that you are having a "
  if (hour >= 12 && hour < 18){
      this.greeting = intro + "good afternoon!";
  }
  else if (hour >= 18){
      this.greeting = intro + "good evening!";
  }
  else {
      this.greeting = intro + "good morning!";
  }
}

Clock.prototype.dayOfWeek = function(){
  var date = new Date();
  var day = date.getDay()
  var weekday = new Array(7);
  weekday[0]=  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  if (day == 0 || day == 6) {
    this.phrase = "I hope that you are having a great weekend!";
  }
  else if (day != 5){
    this.phrase = "Happy " + weekday[day] + "!";
  }
  else if (day == 5){
    this.phrase = "Happy Friday! The weekend is almost here!";
  }
}
