﻿function init() {
    var b, a = document.getElementById("leafContainer");
    for (b = 0; NUMBER_OF_LEAVES > b; b++)
        a.appendChild(createALeaf())
}
function randomInteger(a, b) {
    return a + Math.floor(Math.random() * (b - a))
}
function randomFloat(a, b) {
    return a + Math.random() * (b - a)
}
function pixelValue(a) {
    return a + "px"
}
function durationValue(a) {
    return a + "s"
}
function createALeaf() {
    var c, d, e, f, a = document.createElement("div"), b = document.createElement("img");
    return b.src = "/e/space/template/images/huaban/" + randomInteger(1, 5) + ".png",
    a.style.top = "-100px",
    a.style.left = pixelValue(randomInteger(0, 600)),
    c = Math.random() < .5 ? "clockwiseSpin" : "counterclockwiseSpinAndFlip",
    a.style.webkitAnimationName = "fade, drop",
    b.style.webkitAnimationName = c,
    d = durationValue(randomFloat(5, 11)),
    e = durationValue(randomFloat(4, 8)),
    a.style.webkitAnimationDuration = d + ", " + d,
    f = durationValue(randomFloat(0, 5)),
    a.style.webkitAnimationDelay = f + ", " + f,
    b.style.webkitAnimationDuration = e,
    a.appendChild(b),
    a
}
const NUMBER_OF_LEAVES = 20;
window.addEventListener("load", init, !1);
