function replaceName(){
    var Username = prompt("Please enter your name", "");
    document.getElementById ("username").innerHTML = Username;
}

replaceName();

// function scrollToSection(sectionId) {
//     var section = document.getElementById(sectionId);

//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
// }


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var option = document.getElementById('option').value;

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('optionError').innerText = '';

    if (name === '') {
        document.getElementById('nameError').innerText = 'Please enter your name.';
        return false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Please enter your email.';
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address.';
            return false;
        }
    }

    if (option === 'Select Option') {
        document.getElementById('optionError').innerText = 'Please select an option.';
        return false;
    }

    return true;
}

function submitForm() {
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
}

// Auto Slide
var SlideIndex = 1;
showDivs(SlideIndex);

function plusDivs(n){
    showDivs(SlideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) {SlideIndex = 1}
    else if (n < 1) SlideIndex = imgList.length;
                        
    for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
    }
    imgList[SlideIndex - 1].style.display = "block";
}
setInterval(() => {
    plusDivs(1);
}, 4000);


// BannerSlide
const imageSlider = document.getElementById('slider')

var i = 0
const images = [
    "https://source.unsplash.com/random/1080x600?landscape&sig=2",
    "https://source.unsplash.com/random/1080x600?landscape&sig=3",
    "https://source.unsplash.com/random/1080x600?landscape&sig=4",
    "https://source.unsplash.com/random/1080x600?landscape&sig=5",
]

function bannerSlide(){
    i += 1
    if (i == images.length){
        i = 0
    }
    imageSlider.src = images[i];
}
setInterval(bannerSlide, 2000);


function toggleMenu() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}