$(function(){
	$("nav li").click(function(){
    $("nav li").eq($(this).index()).addClass("click").siblings().removeClass("click");
  	})
})

var slideIndex = 0;
var myVar;
var slides = document.getElementsByClassName("slides");
showSlides();
function currentSlide(n) {
    clearTimeout();
    slideIndex = n-1;
    clearTimeout(myVar);
    showSlides()
}
function prev(){
	clearTimeout();
	slideIndex = slideIndex-2;
	if(slideIndex<0){
		slideIndex=slides.length-1;
	}
	clearTimeout(myVar);
	showSlides()
}
function next(){
	clearTimeout();
	clearTimeout(myVar);
	showSlides();
}
function showSlides(){
    var i=0;
    var dots = document.getElementsByClassName("dot");
    for(i ; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
		for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
	myVar = setTimeout(showSlides, 2000);
}