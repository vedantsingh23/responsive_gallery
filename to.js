let slide = 1; //Sets the picture index

//Makes the photo pop up
function openn(){
    document.getElementById('images1').style.display = 'block';
}

//Makes the x button functional
function closee(){
    document.getElementById('images1').style.display = 'none';
}
//Goes onto the next slide
function nextSlide(n){
    slideshow(slide += n)
}
// Shows the current slide
function current(n){
    slideshow(slide = n)

}
//Displays the Slideshow
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
//displayes slide at correct index
    slides[slide-1].style.display = 'block';
}

//Display the slideshow when dom content is loaded
document.addEventListener('DOMContentLoaded', function(){
    slideshow(slide)
})