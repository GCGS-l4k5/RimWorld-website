window.onscroll = function() {stickyNavBar()};
var wrapper = document.getElementById("RimWorldLogoIntro");
var sticky = wrapper.offsetTop;
var navbar = document.getElementById("navbar")
var navbarOffset = navbar.offsetTop;



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