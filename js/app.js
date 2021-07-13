let lies = document.querySelectorAll("nav ul li")
lies.forEach((e) => {
        e.addEventListener("mouseenter", (data) => {
            tl = gsap.timeline()
                .to(data.path[0].querySelector(".hover"), 0.5, {
                    ease: "power1.easeOut",
                    transform: "translate(0,0)"
                })
            data.path[0].addEventListener("mouseleave", () => {
                tl.reverse()
            })
        })
    })
    //This code was for nav slider animations
const buttonRight = document.querySelector(".slider-right")
const buttonLeft = document.querySelector(".slider-left")

buttonLeft.addEventListener("click", () => {
    let addItems = document.querySelectorAll(".slider-box")
    let items = []
    addItems.forEach((e) => {
        if (e.classList.contains("box-left")) {
            items[0] = { "left": e }
        } else if (e.classList.contains("box-right")) {
            items[1] = { "right": e }
        } else {
            items[2] = { "active": e }
        }
    })
    console.log(items);
    items[1].right.classList.remove("box-right")
    items[1].right.classList.add("slider-box-active")
    items[2].active.classList.remove("slider-box-active")
    items[2].active.classList.add("box-left")
    items[0].left.classList.remove("box-left")
    items[0].left.classList.add("box-right")
})
buttonRight.addEventListener("click", () => {
        let addItems = document.querySelectorAll(".slider-box")
        let items = []
        addItems.forEach((e) => {
            if (e.classList.contains("box-left")) {
                items[0] = { "left": e }
            } else if (e.classList.contains("box-right")) {
                items[1] = { "right": e }
            } else {
                items[2] = { "active": e }
            }
        })
        console.log(items);
        items[1].right.classList.remove("box-right")
        items[1].right.classList.add("box-left")
        items[2].active.classList.remove("slider-box-active")
        items[2].active.classList.add("box-right")
        items[0].left.classList.remove("box-left")
        items[0].left.classList.add("slider-box-active")
    })
    //For Failed slider
if (window.innerWidth > 700) {
    let tls1 = new gsap.timeline({ paused: true })
        .to(".background", 1, {
            width: "38rem",
            height: "45rem",
            borderRadius: "30px",
            transform: "translate(3vw,50vh) rotate(-58deg)"
        }).to("#first", 0.5, {
            y: -100,
            opacity: 0,
            display: "none",
            pointerEvents: "none"
        }, "-=1")
        .to(".circle2", 0.5, {
            backgroundColor: "#F07E24"
        }, "-=0.5")
        .to(".circle1", 0.5, {
            backgroundColor: "#C4C4C4"
        }, "-=0.5")
        .fromTo("#second", 0.5, {
            y: 100,
            opacity: 0,
            display: "none",
            pointerEvents: "none"
        }, {
            y: "-8vh",
            opacity: 1,
            display: "flex",
            pointerEvents: "auto"
        }, "-=0.5")
    let tls2 = new gsap.timeline({ paused: true })
        .to(".background", 1, {
            transform: "translate(60vw,50vh)"
        })
        .to("#second", 0.5, {
            y: -100,
            pointerEvents: "none",
            opacity: 0,
            display: "none"
        }, "-=1")
        .to(".circle2", 0.5, {
            backgroundColor: "#C4C4C4"
        }, "-=0.5")
        .to(".circle3", 0.5, {
            backgroundColor: "#F07E24"
        }, "-=0.5")
        .fromTo("#third", 0.5, {
            y: 100,
            pointerEvents: "none",
            opacity: 0,
            display: "none"
        }, {
            y: 0,
            pointerEvents: "auto",
            opacity: 1,
            display: "block"
        }, "-=0.5")


    const controller = new ScrollMagic.Controller();
    let sence1 = new ScrollMagic.Scene({
            triggerElement: ".pinned-section",
            triggerHook: 0,
        })
        // .addIndicators()
        .setPin(".pinned-section")
        .addTo(controller)
    let sence2 = new ScrollMagic.Scene({
            triggerElement: ".hit1",
            triggerHook: 0,
        })
        // .addIndicators()
        .setTween(tls1)
        .addTo(controller)
    let sence3 = new ScrollMagic.Scene({
            triggerElement: ".hit2",
            triggerHook: 0,
        })
        // .addIndicators()
        .setTween(tls2)
        .addTo(controller)
} else {
    let tls1 = new gsap.timeline({ paused: true })
        .to(".background", 1, {
            transform: "translate(-32rem,22rem) rotate(180deg) skew(360deg)"
        }).to("#first", 0.5, {
            y: -100,
            opacity: 0,
            display: "none",
            pointerEvents: "none"
        }, "-=1")
        .to(".circle2", 0.5, {
            backgroundColor: "#F07E24"
        }, "-=0.5")
        .to(".circle1", 0.5, {
            backgroundColor: "#C4C4C4"
        }, "-=0.5")
        .fromTo("#second", 0.5, {
            y: 100,
            opacity: 0,
            display: "none",
            pointerEvents: "none"
        }, {
            y: "-8vh",
            opacity: 1,
            display: "flex",
            pointerEvents: "auto"
        }, "-=0.5")
    let tls2 = new gsap.timeline({ paused: true })
        .to(".background", 1, {
            transform: " translate(-3rem, 36rem) rotate(180deg)"
        })
        .to("#second", 0.5, {
            y: -100,
            pointerEvents: "none",
            opacity: 0,
            display: "none"
        }, "-=1")
        .to(".circle2", 0.5, {
            backgroundColor: "#C4C4C4"
        }, "-=0.5")
        .to(".circle3", 0.5, {
            backgroundColor: "#F07E24"
        }, "-=0.5")
        .fromTo("#third", 0.5, {
            y: 100,
            pointerEvents: "none",
            opacity: 0,
            display: "none"
        }, {
            y: 0,
            pointerEvents: "auto",
            opacity: 1,
            display: "block"
        }, "-=0.5")


    const controller = new ScrollMagic.Controller();
    let sence1 = new ScrollMagic.Scene({
            triggerElement: ".pinned-section",
            triggerHook: 0,
        })
        // .addIndicators()
        .setPin(".pinned-section")
        .addTo(controller)
    let sence2 = new ScrollMagic.Scene({
            triggerElement: ".hit1",
            triggerHook: 0,
        })
        // .addIndicators()
        .setTween(tls1)
        .addTo(controller)
    let sence3 = new ScrollMagic.Scene({
            triggerElement: ".hit2",
            triggerHook: 0,
        })
        // .addIndicators()
        .setTween(tls2)
        .addTo(controller)
}


//Hamburger menu
const overlay = document.querySelector(".overlay-nav")
const hamburger = document.querySelector(".hamburger")
const hamburger2 = document.querySelector(".hamburger-cross")
let hamburgertl = new gsap.timeline({ paused: true });
hamburgertl.fromTo(overlay, 0.5, {
    ease: "power2.easeOut",
    display: "none",
    opacity: 0,
    y: 100
}, {
    display: "block",
    opacity: 1,
    y: 0
})
hamburger.addEventListener("click", () => {
    hamburgertl.play()
})
hamburger2.addEventListener("click", () => {
    hamburgertl.reverse()
})