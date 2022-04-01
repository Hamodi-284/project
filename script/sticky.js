window.onscroll = function () {
    var header = document.querySelector('header');

    var secondary_nav = document.querySelector('.secondary-navigation');



 if (header.scrollTop > 1 || self.pageYOffset > 1){
        header.style.position = 'sticky';
        header.style.top = '0';


    }else if (header.scrollTop < 1 || self.pageYOffset < 1) {
        header.style.position = 'sticky';
        header.style.top = '0';
     header.style.padding = "0";

    }


    if (secondary_nav > 300 || self.pageYOffset > 300) {
        secondary_nav.style.position = 'sticky';
        secondary_nav.style.top = '76px';
        secondary_nav.style.borderRadius = '0';
    }

    else {
        secondary_nav.style.position = 'sticky';
        secondary_nav.style.top = '76px';
        secondary_nav.style.borderRadius = '10px';
    }

}

// Get all sections that have an ID defined
const sections = document.querySelectorAll(".description");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop- 470;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".secondary-navigation ul ."+sectionId+"").classList.add("actives");
        } else {
            document.querySelector(".secondary-navigation ul ." + sectionId + "").classList.remove("actives");
        }
    });
}






