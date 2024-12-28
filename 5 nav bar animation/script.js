var tl = gsap.timeline();

var menu = document.querySelector("#nav i");

var close = document.querySelector("#full i");

tl.to("#full",{
    x:"-100%",
    duration:0.6,

})
tl.from("#full h4",{
    x:150,
    duration:0.5,
    stagger:0.2,
    opacity:0
})
tl.from("#full i",{
    
    opacity:0
})

tl.pause();

menu.addEventListener("click",()=>{
    tl.play();
})

close.addEventListener("click",()=>{
    tl.reverse();
})