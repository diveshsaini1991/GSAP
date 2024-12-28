


var string = document.querySelector("#string");

string.addEventListener("mousemove",(dets)=>{
    var path = `M 10 200 Q ${dets.x} ${dets.y} 990 200`;

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",()=>{
    path = `M 10 200 Q 500 200 990 200`;

    gsap.to("svg path",{
        attr:{d:path},
        duration:1.5,
        ease:"elastic.out(1.5,0.2)"
    })
})