let imIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("im");
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    imIndex++;
    if (imIndex>slides.length){
        imIndex = 1 }
        slides[imIndex-1].style.display = "block";
        setTimeout(showSlides, 2000)
}