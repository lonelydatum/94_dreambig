(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var READ = {
	f1: 1.8,
	f2: 1,
	f3: 1

};

var TIME = .12;
var tickerWH = { w: 171, h: 151 };
var ROTATE = { ease: 'power2.out', rotationX: -180, transformOrigin: "0 " + tickerWH.h + "px" };

function ticker() {

	TweenLite.set(".cardWrapper", { perspective: 800 });
	TweenLite.set([".cardWrapper", ".cardFace"], { width: tickerWH.w, height: tickerWH.h });
	TweenLite.set(".card", { transformStyle: "preserve-3d" });
	TweenLite.set(".back", { rotationX: -180 });

	TweenLite.set([".back", ".front"], { backfaceVisibility: "hidden" });
	var tl_ones = new TimelineMax({
		onStart: function onStart() {
			TweenLite.set(".ticker-ones .faker .start.a", { opacity: 0 });
		}
	});

	var _loop = function (i) {
		var now = ".ticker-ones .c" + (i + 1);
		var next = ".ticker-ones .c" + (i + 2);

		var frame = "f" + i;
		tl_ones.add(frame);
		tl_ones.set([now, next], { opacity: 1 }, frame);
		tl_ones.set(now, { zIndex: i + 1 }, frame);
		tl_ones.to(" " + now + " .card", TIME, _extends({}, ROTATE, { delay: .1, onStart: function onStart() {
				if (i === 8) {
					doTens();
				}
			} }), frame);
	};

	for (var i = 0; i < 9; i++) {
		_loop(i);
	}
}

function doTens() {
	TweenLite.set(".ticker-ones .faker .end.a", { opacity: 1 });
	TweenLite.set(".ticker-tens .faker .end.a", { opacity: 1 });
	TweenLite.set(".ticker-tens .c2", { zIndex: 1 });
	TweenLite.to(".ticker-tens .c2 .card", TIME, _extends({}, ROTATE));
}

function start() {
	var tl = new TimelineMax({
		onComplete: function onComplete() {
			TweenLite.set("#legalBtn", { display: "block" });
		}
	});

	tl.set([".frame0", ".frame1"], { opacity: 1 });
	tl.add("f1", "+=.3");

	tl.from(".frame1 .dream_big", { y: bannerSize.h, ease: "back.out", duration: .5 }, "f1");
	tl.from(".cloud_palm", { x: -100, opacity: 0, ease: "power2.out", duration: .4 }, "f1");

	tl.add("f2", "+=" + READ.f1);
	tl.set(".frame2", { opacity: 1 });
	if (universalBanner.size === "320x50" || universalBanner.size === "970x250") {
		tl.to(".sky_palm", { opacity: 0, duration: .4 }, "f2");
	}
	tl.to(".frame1 .dream_big", { duration: .3, opacity: 0 }, "f2");
	tl.to([".cloud_palm"], { x: -50, duration: .3, opacity: 0 }, "f2");
	tl.from(".logo_max", { opacity: 0, duration: .3 }, "f2");
	tl.from(".cloud_gutar", { opacity: 0, x: bannerSize.w, duration: .3 });

	tl.add("bar");
	tl.from(".bar", { x: -100, y: 20, opacity: 0, duration: .3 }, "bar");
	tl.from(".t1", { x: -50, y: 10, opacity: 0, duration: .3 }, "bar+=.3");
	tl.from(".date", { y: -20, opacity: 0, duration: .3 }, "bar+=.3");
	tl.from(".tickerMain", { opacity: 0, y: "+=60", ease: "back.out", duration: .4 }, "bar+=.3");
	tl.call(ticker);

	tl.add("f3", "+=3");
	tl.to(".tickerMain", { opacity: 0, duration: .3 }, "f3");
	tl.to(".cloud_gutar", { opacity: 0, x: 100, duration: .3 }, "f3");
	tl.to(".t1", { opacity: 0, duration: .3 }, "f3");

	tl.add("bike", "+=.3");
	tl.from(".cloud_bike", { x: 100, opacity: 0, y: 60, duration: .5 }, "bike");
	tl.from(".t2", { opacity: 0, x: -50, y: 10, duration: .3 }, "bike+=.3");

	tl.add("end", "+=2");

	tl.set(".frame3", { opacity: 1 }, "end");
	tl.to(".cloud_bike", { x: -100, opacity: 0, y: -60, ease: "back.inOut", duration: .3 }, "end");
	tl.to(".footer-bar", { opacity: 0, duration: .3 });

	tl.from(".frame3 .dream_big", { opacity: 0, y: "+=100", ease: "back.out", duration: .4 }, "end+=.3");
	tl.from(".phone", { opacity: 0, y: "+=100", ease: "back.out", duration: .4 }, "end+=.4");
	tl.from(".cta", { opacity: 0, duration: .3 }, "+=.5");
	tl.add("wedge", "+=.3");
	tl.from(".legal", { opacity: 0, duration: .3 }, "wedge");
	tl.add((0, _proline.olg)(), "wedge");

	// tl.play("end")
}

exports.start = start;

},{"./helpers/helpers.js":2,"./proline":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)();

},{"../../_common/js/common.js":1}]},{},[4])


//# sourceMappingURL=main.js.map
