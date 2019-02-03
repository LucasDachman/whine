(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function MouseSpeed() {
    _classCallCheck(this, MouseSpeed);

    this.cb = function () {};
    this.speedX = 0;
    this.speedY = 0;
    this.oldX = 0;
    this.oldY = 0;
    this.firstCalc = true;
    this.timerId;
    this.calcSpeed = this.calcSpeed.bind(this);
  }

  _createClass(MouseSpeed, [{
    key: "calcSpeed",
    value: function calcSpeed(e) {
      if (!this.firstCalc) {
        this.speedX = e.clientX - this.oldX;
        this.speedY = e.clientY - this.oldY;
        this.oldX = e.clientX;
        this.oldY = e.clientY;
        this.cb();
        this.setToZero();
      } else {
        this.oldX = e.clientX;
        this.oldY = e.clientY;
        this.firstCalc = false;
      }
    }
  }, {
    key: "setToZero",
    value: function setToZero() {
      var _this = this;

      clearTimeout(this.timerId);
      this.timerId = setTimeout(function () {
        _this.speedX = 0;
        _this.speedY = 0;
        _this.cb();
      }, 50);
    }
  }, {
    key: "init",
    value: function init() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        console.log("pass a callback function on init to access speedX and speedY.");
      };

      this.cb = cb;
      window.addEventListener("mousemove", this.calcSpeed);
    }
  }, {
    key: "destroy",
    value: function destroy(cb) {
      window.removeEventListener("mousemove", this.calcSpeed);
      cb();
    }
  }]);

  return MouseSpeed;
}();
},{}],2:[function(require,module,exports){
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
},{"mouse-speed":1}]},{},[2]);
