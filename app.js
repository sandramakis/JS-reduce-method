"use strict";

const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [min, secs] = timeCode.slice(0).split(":").map(parseFloat);
    return min * 60 + secs;
  })
  .reduce((total, cur) => total + cur);

let secondsLeft = seconds;

// hours left in seconds (1hr=60mins*60sec= 3,600)
const hoursLeft = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minsLeft = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 600;

console.log(hoursLeft, minsLeft, secondsLeft);
