// SNAPSVG.JS Clock Layout

// .circle[ (x) (y) (radius) ]
// .rect[ (x-cordinate-top-left) (y-cordinate-top-left) (width) (height) (x-radius-corner) (y-radius-corner) ]

var clock = Snap(".clock");
var frame = clock.circle(32, 32, 30).attr({
  fill: "#302F30",
  stroke: "#5C89AD",
  strokeWidth: 1
});
var hours = clock.rect(31, 13, 2, 25, 3).attr({
  fill: "#7CD06B",
  stroke: "#302F30",
  strokeWidth: 1
});
var minutes = clock.rect(31, 10, 2, 31, 2).attr({
  fill: "#7CD06B",
  stroke: "#302F30",
  strokeWidth: 1
});
var seconds = clock.path("M30.5,38.625c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5c0-0.656-0.414-1.202-1-1.406V10.125c0-0.277-0.223-0.5-0.5-0.5s-0.5,0.223-0.5,0.5v27.094C30.914,37.423,30.5,37.969,30.5,38.625z M31,38.625c0-0.552,0.448-1,1-1s1,0.448,1,1s-0.448,1-1,1S31,39.177,31,38.625z").attr({
  fill: "#8ED9F0",
});
var middle = clock.circle(32, 32, 2).attr({
  fill: "#302F30",
  stroke: "#8ED9F0",
  strokeWidth: 1
});

// CLOCK Timer

var updateTime = function() {
  var currentTime, data, hour, minute, second;
  currentTime = new Date();
  second = currentTime.getSeconds();
  minute = currentTime.getMinutes();
  hour = currentTime.getHours();
  hour = (hour > 12) ? hour - 12 : hour;
  hour = (hour == '00') ? 12 : hour;
  hour = hour + minute / 60;
  hours.animate({
    transform: "r" + hour * 30 + "," + 32 + "," + 32
  }, 200, mina.elastic);
  minutes.animate({
    transform: "r" + minute * 6 + "," + 32 + "," + 32
  }, 200, mina.elastic);
  seconds.animate({
    transform: "r" + second * 6 + "," + 32 + "," + 32
  }, 500, mina.elastic);
};

setInterval(updateTime, 1000);