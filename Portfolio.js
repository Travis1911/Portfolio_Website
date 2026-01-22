// CONTACT FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// AUTO SLIDESHOW
setInterval(() => {
    plusSlides(1);
}, 5000);

// CLICK OUTSIDE TO CLOSE FORM
document.addEventListener("click", function(event) {
    if (
        event.target.matches(".cancel") ||
        (!event.target.closest(".form-popup") &&
         !event.target.closest(".contact"))
    ) {
        closeForm();
    }
});

// PAGE FADE-IN
window.addEventListener("load", function () {
    document.body.classList.remove("fade-out");
});
