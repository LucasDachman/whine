const Tone = require('tone')
const MouseSpeed = require('mouse-speed')
const _ = require('lodash')
const speed = new MouseSpeed()
const size = 40
const speeds = new Array(40).fill(0)
let index = 0
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
  speeds[index] = map(magnitude, 0,50, 80, 800)
  index = index === size ? 0 : index + 1
  const average = _.sum(speeds) / size

  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  osc.frequency.value = average
}

var osc = new Tone.Oscillator(440, "sine").toMaster().start();
Tone.Transport.start();

