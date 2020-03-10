var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function opennewtab() {
    window.open("https://www.google.com/maps/dir//237+%C4%90%C6%B0%E1%BB%9Dng+L%C3%AA+V%C4%83n+S%E1%BB%B9,+Ph%C6%B0%E1%BB%9Dng+13,+Qu%E1%BA%ADn+3,+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.787129,106.6767895,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31752f2a53b764c7:0xca0eef84d9f004dd!2m2!1d106.6789782!2d10.7871237");
}