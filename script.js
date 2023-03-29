const blackBall = document.querySelector(".circle");
const body = document.body;

const index = document.querySelector(".index_btn");
const about = document.querySelector(".about_btn");
const work = document.querySelector(".work_btn");
const epilouge = document.querySelector(".epilogue_btn");

const page2 = document.querySelector("#page2");
/** 가로 스크롤이 필요한 구간 */
const page3 = document.querySelector("#page3");
/** 세로 스크롤이 다시 시작되어야 하는 구간 */
const page4 = document.querySelector("#page4");

const page2Y = page2.offsetTop + 100;

body.addEventListener("mousemove", function (event) {
	let x = event.clientX;
	let y = event.clientY;
	blackBall.style.left = x + "px";
	blackBall.style.top = y + "px";
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

//가로 스크롤이 필요한 영역
const scrollDiv = document.querySelector(".wrap");

//스크롤 좌표 (시작점 및 끝점) - fixed 영역인 100 제외
const leftScrollStart = page3.offsetTop - 110;
const leftScrollEnd = page4.offsetTop - 110;

let scrollY = 0;
let scrollX = 0;

//마우스 휠 동작시 사용하는 이벤트
window.addEventListener(
	"wheel", (e) => {
		e.preventDefault(); //마우스 휠 기본 이벤트 방지
		let delta = e.deltaY; //마우스 휠 이동량 감지
		if(delta > 30){
			delta = 30;
		}else if(delta < -30){
			delta = -30;
		}

		if(scrollX < 0){
			scrollX = 0;
		}

		if(scrollY > document.documentElement.scrollHeight - window.innerHeight){
			scrollY = document.documentElement.scrollHeight - window.innerHeight
		}

		if(scrollY < 0){
			scrollY = 0;
		}

		if(delta > 0){
			if ( //스크롤을 내리고 있을 때 - 스크롤 시작점과 끝점 + 왼쪽 스크롤 체크 
				window.scrollY > leftScrollStart &&
				window.scrollY < leftScrollEnd &&
				scrollDiv.scrollLeft < (scrollDiv.scrollWidth - window.innerWidth) //왼쪽 좌표는 width 빼야함
			){ //해당되는 경우 오른쪽 스크롤 진행
				// window.scroll({top: leftScrollStart});
				scrollDiv.scrollLeft += delta;
			} else { //해당되지 않으면 일반 스크롤
				scrollY += delta
				window.scrollTo(0, scrollY);
			}
		}else{
			if ( //스크롤을 올리고 있을 때 - 스크롤 시작점과 끝점 + 왼쪽 스크롤 체크
				window.scrollY > leftScrollStart - window.innerHeight + 120 &&
				window.scrollY < leftScrollEnd - window.innerHeight + 120 && //위쪽 좌표는 높이 빼야함
				scrollDiv.scrollLeft > 0
			){ //해당되는 경우 왼쪽 스크롤 실행
				// window.scrollTo(window.scrollX, window.scrollY);
				scrollDiv.scrollLeft += delta;
			} else {
				scrollY += delta
				window.scrollTo(0, scrollY);
			}
		}		
	}, {passive: false} //passive 옵션을 사용하지 않으면 기본 이벤트를 막을 수 없다(브라우저가 걍 무시함)
);

window.addEventListener('scroll', e =>{
	e.preventDefault();

})
