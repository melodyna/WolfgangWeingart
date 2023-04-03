const body = document.body;

const home = document.querySelector(".home_btn");
const index = document.querySelector(".index_btn");
const about = document.querySelector(".about_btn");
const work = document.querySelector(".work_btn");
const epilouge = document.querySelector(".epilogue_btn");

const arrowDown = document.querySelector("#a-arrow");
const arrowUp = document.querySelector("#d-arrow");

const page2 = document.querySelector("#page2");
/** Horizontal-Scroll */
const page3 = document.querySelector("#page3");
/** Vertical-Scroll(restart) */
const page4 = document.querySelector("#page4");

const page2Y = page2.offsetTop + 100;



arrowDown.addEventListener("click", (e)=> {
	window.scrollTo({
		top: page2.offsetTop - 100,
		left : 0,
		behavior : "smooth",
	})
});

index.addEventListener("click", (e) => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

about.addEventListener("click", (e)=> {
	window.scrollTo({
		top: page2.offsetTop - 100,
		left : 0,
		behavior : "smooth",
	})
});

work.addEventListener("click", (e)=> {
	window.scrollTo({
		top: page3.offsetTop - 100,
		left : 0,
		behavior : "smooth",
	})
});

epilouge.addEventListener("click", (e)=> {
	window.scrollTo({
		top: page4.offsetTop - 100,
		left : 0,
		behavior : "smooth",
	})
});

arrowUp.addEventListener("click", (e)=> {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	})
});

//Horizontal-Scroll
const scrollDiv = document.querySelector(".wrap");

//scroll coordinates - except 100(fixed part)
const navbarHeight = document.querySelector("nav").clientHeight; 
const leftScrollStart = page3.offsetTop - navbarHeight;
const leftScrollEnd = page4.offsetTop;

//event when scrolling
window.addEventListener(
	"wheel", (e) => {
		e.preventDefault(); //  prevent basic event of mousewheel
		const delta = e.deltaY; //detect changes between one state and another

		if(delta > 0){
			if ( //when scrolling down - scrollstart scrollend + leftscroll check
				window.scrollY > leftScrollStart &&
				window.scrollY < leftScrollEnd &&
				scrollDiv.scrollLeft < (scrollDiv.scrollWidth - window.innerWidth) // exclude width for left coordinates
			){ //right scroll
				console.log("bingo!");
				window.scrollTo(0, window.scrollY);
				scrollDiv.scrollLeft += delta;
			} else { //general scroll
				window.scrollTo(0, window.scrollY + e.deltaY);
			}
		}else{
			if ( //when scrolling up - scrollstart scrollend + leftscroll check
				window.scrollY > leftScrollStart - window.innerHeight &&
				window.scrollY < leftScrollEnd - window.innerHeight && // exclude height for up coordinates
				scrollDiv.scrollLeft > 0
			){ //left scroll
				console.log("bango!");
				window.scrollTo(window.scrollX, window.scrollY);
				scrollDiv.scrollLeft += delta;
			} else {
				window.scrollTo(0, window.scrollY + e.deltaY);
			}
		}		
	}, {passive: false} // without passive option, it's not going to prevent basic event(browser ignores)
);

window.addEventListener('scroll', e =>{
	e.preventDefault();
})
