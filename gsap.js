gsap.registerPlugin(ScrollTrigger)

gsap.from(".imgicon",{
    scrollTrigger:{
        trigger:".imgicon",
        scrub:1
    },
    rotateY:360,
    duration:0.2
})

gsap.from(".imgicon2",{
    scrollTrigger:{
        trigger:".imgicon2",
        scrub:1
    },
    rotateY:360,
    duration:0.2
})