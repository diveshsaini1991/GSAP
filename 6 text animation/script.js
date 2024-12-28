var breaktext=()=>{
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent;

    var splittedText = h1text.split("");

    var halfLen = Math.floor(splittedText.length/2)

    var clutter = "";

    splittedText.forEach((ele,ind)=>{
        if(ind<halfLen){
            clutter+=`<span class="fromLeft">${ele}</span>`;
        }else{
            clutter+=`<span class="fromRight">${ele}</span>`;
        }
    })

    h1.innerHTML=clutter;
}
breaktext();

gsap.from(".fromLeft",{
    y:100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
gsap.from(".fromRight",{
    y:100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})