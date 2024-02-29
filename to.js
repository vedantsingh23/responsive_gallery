let slide = 1;
function openn(){
    document.getElementById('images1').style.display = 'block';
}

function closee(){
    document.getElementById('images1').style.display = 'none';
}

function nextSlide(n){
    slideshow(slide += n)
}

function current(n){
    slideshow(slide = n)

}

function slideshow(n){
    let slides = document.getElementsByClassName('zondaa');
    if(n>slides.length){
        slide = 1
    }

    if(n<1){
        slide = slides.length;
    }

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }

    slides[slide-1].style.display = 'block';
}



document.addEventListener('DOMContentLoaded', function(){
    slideshow(slide)
})