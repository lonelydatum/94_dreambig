import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});


const READ = {
	f1: 1.8,
	f2: 1,
	f3: 1

}

const TIME = .12
const tickerWH = {w:171, h:151}
const ROTATE = {ease: 'power2.out', rotationX:-180, transformOrigin:`0 ${tickerWH.h}px`}


function ticker(){
	
	
	TweenLite.set(".cardWrapper", {perspective:800});
	TweenLite.set([".cardWrapper", ".cardFace"], {width:tickerWH.w, height:tickerWH.h});
	TweenLite.set(".card", {transformStyle:"preserve-3d"});
	TweenLite.set(".back", {rotationX:-180});

	TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
	var tl_ones = new TimelineMax({
		onStart(){
			TweenLite.set(".ticker-ones .faker .start.a", {opacity:0});
		}
	});
	for(let i=0;i<9;i++){
		const now = `.ticker-ones .c${i+1}`
		const next = `.ticker-ones .c${i+2}`
		
		const frame = `f${i}`
		tl_ones.add(frame)
		tl_ones.set([now, next], { opacity:1}, frame);
		tl_ones.set(now, {zIndex:i+1}, frame);
		tl_ones.to(` ${now} .card`, TIME, {...ROTATE,delay:.1,onStart(){
			if(i===8){				
				doTens()
			}
		}}, frame);	

	}
	


}



function doTens(){
	TweenLite.set(".ticker-ones .faker .end.a", {opacity:1});
	TweenLite.set(`.ticker-tens .faker .end.a`, {opacity:1});
	TweenLite.set(`.ticker-tens .c2`, {zIndex:1});
	TweenLite.to(`.ticker-tens .c2 .card`, TIME, {...ROTATE});	
}

function start(){
	var tl = new TimelineMax({
		onComplete(){
			TweenLite.set(`#legalBtn`, {display:"block"});		
		}
	});
	
	tl.set([".frame0", ".frame1"], {opacity:1})
	tl.add("f1", "+=.3")
	
	tl.from(".frame1 .dream_big", {y:bannerSize.h, ease:"back.out", duration:.5}, "f1")
	tl.from(".cloud_palm", {x:-100, opacity:0, ease:"power2.out",  duration:.4}, "f1")


	tl.add("f2", `+=${READ.f1}`)
	tl.set(".frame2", {opacity:1})
	if(universalBanner.size==="320x50" || universalBanner.size==="970x250"){
		tl.to(".sky_palm", { opacity:0, duration:.4}, "f2")	
	}
	tl.to(".frame1 .dream_big", {duration:.3, opacity:0}, "f2")
	tl.to([".cloud_palm"], {x:-50, duration:.3, opacity:0}, "f2")
	tl.from(".logo_max", {opacity:0, duration:.3}, "f2")
	tl.from(".cloud_gutar", {opacity:0, x:bannerSize.w, duration:.3})
	

	tl.add("bar")
	tl.from(".bar", {x:-100, y:20, opacity:0, duration:.3}, "bar")
	tl.from(".t1", {x:-50, y:10, opacity:0, duration:.3}, "bar+=.3")
	tl.from(".date", {y:-20, opacity:0, duration:.3}, "bar+=.3")	
	tl.from(".tickerMain", {opacity:0, y:"+=60", ease:"back.out", duration:.4}, "bar+=.3")
	tl.call(ticker)

	tl.add("f3", "+=3")
	tl.to(".tickerMain", {opacity:0, duration:.3}, "f3")
	tl.to(".cloud_gutar", {opacity:0, x:100, duration:.3}, "f3")
	tl.to(".t1", {opacity:0, duration:.3}, "f3")

	tl.add("bike", "+=.3")
	tl.from(".cloud_bike", {x:100, opacity:0, y:60, duration:.5}, "bike")	
	tl.from(".t2", {opacity:0, x:-50, y:10, duration:.3}, "bike+=.3")
	

	tl.add("end", "+=2")

	tl.set(".frame3", {opacity:1}, "end")
	tl.to(".cloud_bike", {x:-100, opacity:0, y:-60, ease:"back.inOut", duration:.3}, "end")
	tl.to(".footer-bar", {opacity:0, duration:.3})


	tl.from(".frame3 .dream_big", {opacity:0, y:"+=100", ease:"back.out", duration:.4}, "end+=.3")
	tl.from(".phone", {opacity:0, y:"+=100", ease:"back.out", duration:.4}, "end+=.4")
	tl.from(".cta", {opacity:0, duration:.3}, "+=.5")
	tl.add("wedge", "+=.3")
	tl.from(".legal", {opacity:0, duration:.3}, "wedge")
	tl.add(olg(), "wedge")

	// tl.play("end")

}


export { start }