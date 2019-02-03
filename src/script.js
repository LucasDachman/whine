const Tone = require('tone')
const MouseSpeed = require('mouse-speed')
const speed = new MouseSpeed()
speed.init(onCalcSpeed)


function map(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function onCalcSpeed() {
  var speedX = speed.speedX
  var speedY = speed.speedY
  // do anything you want with speed values
  // a2 + b2 = c2
  const magnitude = Math.sqrt(Math.pow(speedX, 2) + Math.pow(speedY, 2))
  console.log('speed', magnitude)
  osc.frequency.value = map(magnitude, 0,50, 80, 800)
}

var osc = new Tone.Oscillator(440, "sine").toMaster().start();
Tone.Transport.start();

