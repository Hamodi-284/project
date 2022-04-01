function scrollbar() {
    var left = document.querySelector(".subject").scrollLeft;

    let sub = document.querySelector(".subject").offsetWidth;

    let width = document.querySelector(".subject").scrollWidth;

    //animate buttons onclick, before and last

    if (left > 200) {
        document.querySelector(".prev-scroll").style.opacity = "1";
        document.querySelector(".prev").className = "prev animate__animated animate__fadeIn";
        /*Her skal de være fadeout animation*/
    }

    else {
        document.querySelector(".prev").className = "prev animate__animated animate__fadeOut 50ms";
        /*Her skal de være fadein animation*/
    }

    if (left > width - sub - 100) {
        document.querySelector(".next").className = "next animate__animated animate__fadeOut 50ms";
    }

    else {
        document.querySelector(".next-scroll").style.opacity = "1";
        document.querySelector(".next").className = "next animate__animated animate__fadeIn";
    }
}

function next() {
    document.querySelector(".subject").scrollLeft += 200;
}

function prev() {
    document.querySelector(".subject").scrollLeft -= 200;
}

