const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1')
// End Section
const section = document.querySelector('section')
const end = section.querySelector('h1');
const textTwo = section.querySelector('h1')

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({
    duration: 37000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller)

const textAnimation = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 })

let sceneTwo = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnimation)
    .addTo(controller)

const textAnimationTwo = TweenMax.fromTo(textTwo, 3, { opacity: 1 }, { opacity: 0 })

let sceneThree = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: section,
    triggerHook: 0
}).addIndicators().setPin(section).setTween(textAnimationTwo).addTo(controller)


//Video
let accelAmount = 0.1 // change the frames of video
let scrollpos = 0
let delay = 0

scene.on('update', (e) => {
    scrollpos = e.scrollPos / 1000;
    // video.currentTime = scrollpos
})

setInterval(() => {
    delay += (scrollpos - delay)
    // video.currentTime = scrollpos
    video.currentTime = delay
}, 41.6)
