window.onscroll = function() {stickyNavBar()};
var wrapper = document.getElementById("RimWorldLogoIntro");
var sticky = wrapper.offsetTop;
var navbar = document.getElementById("navbar")
var navbarOffset = navbar.offsetTop;
var rellax = new Rellax(".rellax")
var rellax = new Rellax(".horizontalRellax",{ 
    horizontal: true,
    vertical: false})


function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else if(window.pageYOffset >= navbarOffset) {
        navbar.classList.remove("sticky");
    }
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("wipeAnimation");
            return;
        }
        else{
            entry.target.classList.remove("wipeAnimation");
        }
    })
});

observer.observe(document.querySelector('.bodyParagraphP'))

const gameplayImage = document.getElementById("backgroundSlideShow")
var slideIndex = 0;
var slideImage = ["url(images/background1.jpg)", "url(images/gameplay.jpg)", "url(images/gameplay3.jpg)"]

function changeGameplay(){
    if(slideIndex == 0){
        gameplayImage.style.backgroundImage=slideImage[0];
        console.log("Switch images to", slideImage[0])
        slideIndex = 1;
    }
    else if(slideIndex == 1){
        gameplayImage.style.backgroundImage=slideImage[1];
        console.log("Switch images to", slideImage[1]);
        slideIndex = 2;
    }
    else if(slideIndex== 2){
        gameplayImage.style.backgroundImage=slideImage[2];
        console.log("Switch images to", slideImage[2]);
        slideIndex = 0;
    }
    setTimeout(changeGameplay, 5000);
}

changeGameplay();
 

