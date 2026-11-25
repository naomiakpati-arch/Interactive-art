for(let i=0;i<150;i++){
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random()*4+1;
    star.syle.width=size+"px";
    star.style.height=size+"px";
    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";
     star.style.animationDuration=
     (Math.random()*4+2)+"s";
     document.body.appendChild(star);
}
const quotes=[
    "For my part I know with any certainty, but the sight of the stars make me dream",
    "I dream my painting and then I paint my dream.",
    "If I hear a voice within you 'you cannot paint,'then by all means paint, and that voice 
    will be silenced"
    "I want something serious, something fresh-something with in it!"
];
const button =
document.getElementByld("quoteBtn");
button.addEventListener("click,"()=>{
    const random =
    quotes[Math.floor.(Math.random()*quotes.length)];
    document.getElementByld("quote box")
    .innerText = random;

})
document.addEventListener("mousemove,(e)=>{
    const stars=
    document.querySelectorAll("star");
    stars.forEach((star,index)=>{
        if(index%20===0){
            const x=(e.clientX-window.inner.Width/2)/400
            const y=(e.clientY-window.inner.Height/2)/400
            star.style.transform=
            'translate(${x}px,${y}px)';
        }
    });
});
