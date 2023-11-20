// Start NAVBAR
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    header = document.querySelector("header");
    header.classList.toggle("active");
    hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active")
    line = document.querySelector(".line");
    line.classList.toggle("active");
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
// End NAVBAR

window.addEventListener("load" , ()=>{
    autoSlide();
})

function autoSlide(){
    setInterval(() => {
        slide(getItemActiveIndex() + 1);
    }, 7000);
}

function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");

    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
        toIndex = 0;
    }

    const newItemActive = itemsArray[toIndex];

    // Start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
        newItemActive.classList.add("carousel_item__next");
        itemActive.classList.add("carousel_item__next");
    }, 20);

    // remove all trnasition class and switch active class
    newItemActive.addEventListener("transitionend", ()=>{
        itemActive.className = "carousel_item";
        newItemActive.className = "carousel_item carousel_item__active";
    }, {
        once: true
    });
}

function getItemActiveIndex(){
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}

// bgcolor scrolled

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
});

// Start Slider
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//End Slider
// Start slide details
const accordion = document.getElementsByClassName('contentBX');
for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
}
// End slide details
// Start Cookies
setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 30);
})

cookieMessage = () => {
    if(!getCookie("cookie"))
        document.querySelector("#cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);
// End cookies