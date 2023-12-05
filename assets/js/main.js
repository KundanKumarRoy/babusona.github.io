// ================ Home slide swiper ----------------------=>
 
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
}); 

// ================== cube Swiper -------------------------------=>

var swiper = new Swiper(".mySwipercube", {
effect: "cube",
grabCursor: true,
loop: true,
cubeEffect: {
shadow: true,
slideShadows: true,
shadowOffset: 20,
shadowScale: 0.94,
},
autoplay: {
delay: 3000,
disableOnInteraction: false
},
pagination: {
el: ".swiper-pagination",
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});

//  ======================== counter ------------------>
//  counter js ********************
$(document).ready(function() {

var counters = $(".count");
var countersQuantity = counters.length;
var counter = []; 

for (i = 0; i < countersQuantity; i++) {
counter[i] = parseInt(counters[i].innerHTML);
}

var count = function(start, value, id) {
var localStart = start;
setInterval(function() {
  if (localStart < value) {
    localStart++;
    counters[id].innerHTML = localStart;
  }
}, 40);
}

for (j = 0; j < countersQuantity; j++) {
count(0, counter[j], j);
}
});
