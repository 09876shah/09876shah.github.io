var navelem = document.querySelectorAll(".rightelem");
var navlog = document.querySelector(".logoimg");
var bgsec1 = document.querySelector("#section1");
var handbugur = document.getElementById("handburgurbtn");
var handbugrurcont = document.getElementById("handbugrurright");
var bgcheck = 0;
navelem.forEach(function (e) {
    e.addEventListener("mousemove", function () {
        this.style.fontSize = "25px";
        this.style.borderBottom = "2px solid aqua";



    });
    e.addEventListener("mouseleave", function () {
        this.style.fontSize = "1.125rem";
        this.style.borderBottom = "none";

    })
});
navlog.addEventListener("mousemove", function () {
    navlog.style.width = "8vw";
    navlog.style.cursor = "pointer"
});
navlog.addEventListener("mouseleave", function () {
    navlog.style.width = "5rem";
    navlog.style.cursor = "pointer"
})
handbugur.addEventListener("click", function () {
    if (bgcheck === 0) {
        handbugrurcont.style.display = "block";
        bgcheck = 1
    }
    else {
        handbugrurcont.style.display = "none";
        bgcheck = 0
    }
})




function switchBackground() {
    if (bgcheck === 0) {
        bgsec1.style.backgroundImage = "url(section1/1.jfif)";
        bgcheck = 1;
    } else if (bgcheck === 1) {
        bgsec1.style.backgroundImage = "url(section1/2.jfif)";
        bgcheck = 2; // Reset back to 0 for next iteration
    }
    else if (bgcheck === 2) {
        bgsec1.style.backgroundImage = "url(section1/3.jfif)";
        bgcheck = 3;
    }
    else if (bgcheck === 3) {
        bgsec1.style.backgroundImage = "url(section1/4.jfif)";
        bgcheck = 4;
    }
    else if (bgcheck === 4) {
        bgsec1.style.backgroundImage = "url(section1/5.jfif)";
        bgcheck = 0;
    }
}

// Call switchBackground initially
switchBackground();

// Set an interval to continuously switch background images
setInterval(switchBackground, 2000);

