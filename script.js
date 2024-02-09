let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px"
    blur.style.left = dets.x - 250 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.top = dets.y - 250 + "px"

})

gsap.to(".nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start:"top -15%",
        end: "top -16%",
        scrub: 2,
    }

})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -70%",
        scrub: 2,
    }
})