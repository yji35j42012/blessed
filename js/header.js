$(function(){
	$("nav li").click(function(){
    $("nav li").eq($(this).index()).addClass("click").siblings().removeClass("click");
  	})
})
//最上面圖片
var content_slides=0;
var c_slides = document.getElementsByClassName("content_slides");
//精彩回顧圖片
var review_slides=0;
var r_slides = document.getElementsByClassName("review_slides");
//鄉民回憶圖片
var memories_slides=0;
var m_slides = document.getElementsByClassName("memories_slides");

var myVar;

showSlides();

function showSlides(){
    var dots = document.getElementsByClassName("dot");
    for(i=0 ; i < c_slides.length; i++){
        c_slides[i].style.display = "none";
    } 


    content_slides++;
    if (content_slides > c_slides.length) {content_slides = 1} 

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	c_slides[content_slides-1].style.display = "block"; 
	dots[content_slides-1].className += " active";



	// if (memories_slides > m_slides.length) {memories_slides = 1} 	
	// m_slides[memories_slides-1].style.display = "block"; 

	
	myVar = setTimeout(showSlides, 2000);
}


function currentSlide(n) {
    clearTimeout();
    content_slides = n-1;
    clearTimeout(myVar);
    showSlides()
}
function prev(){
	clearTimeout();
	content_slides = content_slides-2;
	if(content_slides<0){
		content_slides=c_slides.length-1;
	}
	clearTimeout(myVar);
	showSlides()
}
function next(){
	clearTimeout();
	clearTimeout(myVar);
	showSlides();
}

function r_prev(){
	for (i = 0; i < r_slides.length; i++) {
		r_slides[i].className = r_slides[i].className.replace(" active", "");
	}
	review_slides = review_slides-1;
	if(review_slides<0){
		review_slides=r_slides.length-1;
	}
	r_slides[review_slides].className += " active";
	// r_slides[i].className = r_slides[i].className.replace(" active", "");
}
// if (screen.width == 1440){
// 	for (i = 0; i < r_slides.length; i++) {
// 		r_slides[i].className += " active";
// 	}
// 	for (i = 0; i < m_slides.length; i++) {
// 		m_slides[i].className += " active";
// 	}
// }
function r_next(){
	for (i = 0; i < r_slides.length; i++) {
		r_slides[i].className = r_slides[i].className.replace(" active", "");
	}
	review_slides = review_slides+1;
	if(review_slides>=r_slides.length){
		review_slides=0;
	}
	r_slides[review_slides].className += " active";
}



function m_prev(){
	for (i = 0; i < m_slides.length; i++) {
		m_slides[i].className = m_slides[i].className.replace(" active", "");
	}
	memories_slides = memories_slides-1;
	if(memories_slides<0){
		memories_slides=m_slides.length-1;
	}
	m_slides[memories_slides].className += " active";
	// r_slides[i].className = r_slides[i].className.replace(" active", "");
}

function m_next(){
	for (i = 0; i < m_slides.length; i++) {
		m_slides[i].className = m_slides[i].className.replace(" active", "");
	}
	memories_slides = memories_slides+1;
	if(memories_slides>=m_slides.length){
		memories_slides=0;
	}
	m_slides[memories_slides].className += " active";
}