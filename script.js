console.clear();

mySplitText = new SplitText(".txt", {type:"chars", charsClass:"char"}); 

let gtl = gsap.timeline({ yoyo: true, repeat: -1, delay: 0 });

function animateText() {
	let tl = gsap.timeline()
		.to( '.char', {
			fontWeight: 100,
			fontStretch: '10%',
			ease: "sine.inOut",
			duration: 0.8,
			stagger: {
				each: 0.4,
				yoyo: true,
				repeat: -1
			}
		} );
	
	return tl;
}

gsap.to('.container', {
	autoAlpha: 1,
	duration: 4,
	ease: 'none'
})

gtl.add(animateText())
	.seek(6)
	.play();