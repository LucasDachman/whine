var MouseSpeed = require('mouse-speed')
var speed = new MouseSpeed()
speed.init(onCalcSpeed)

setInterval(function() {
    var speedX = speed.speedX
    var speedY = speed.speedY
    // do anything you want with speed values
    console.log(speedX, speedY)
    // a2 + b2 = c2
    Math.sqrt( Math.pow(speedX, 2) + Math.pow(speedY) )
}, 1000)