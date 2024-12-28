
// gsap.from("#box",{
//     x:1000,
//     opacity:0,
//     y:400,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"green",
//     borderRadius:"50%",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true
// })
// gsap.from("h1",{
//     opacity:0,
//     y:30,
//     duration:1,
//     delay:3,
//     stagger:-0.5
// })


// var tl = gsap.timeline();
// tl.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     borderRadius:"50%",
//     rotate:360,
//     scale:0.5
// })
// tl.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:1,
//     borderRadius:"50%",
//     rotate:360,
//     scale:0.5
// })
// tl.to("#box3",{
//     x:1000,
//     duration:2,
//     delay:1,
//     borderRadius:"50%",
//     rotate:360,
//     scale:0.5
// })

var tl2 = gsap.timeline();

tl2.from("h2",{
    y:-20,
    opacity:0,
    duration:0.7,
    delay:0.3
})
tl2.from("h4",{
    y:-20,
    opacity:0,
    duration:0.7,
    stagger:0.3
})
tl2.from("h1",{
    y:20,
    opacity:0,
    duration:0.7,
    scale:0.2
})