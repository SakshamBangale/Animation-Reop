
// MASTER TIMELINE

const tl = gsap.timeline();

tl.from(".logo",{
y:-100,
opacity:0,
duration:1
})

.from("nav li",{
y:-50,
opacity:0,
stagger:0.1,
duration:.7
},"-=0.5")

.from(".subtitle",{
x:-100,
opacity:0,
duration:1
})

.from("h1",{
y:100,
opacity:0,
duration:1
},"-=0.5")

.from("p",{
y:50,
opacity:0,
duration:1
},"-=0.6")

.from(".btn",{
scale:0,
opacity:0,
stagger:0.2,
duration:.8
},"-=0.4")

.from(".car",{
x:1000,
rotation:-10,
duration:2,
ease:"power4.out"
},"-=1")

.from(".wheel",{
scale:0,
duration:1
},"-=1");

// Wheels

gsap.to(".wheel",{
rotation:360,
repeat:-1,
ease:"none",
duration:.6
});

// Road

gsap.to(".road",{
x:-400,
repeat:-1,
ease:"none",
duration:2
});

// Floating car

gsap.to(".car",{
y:-15,
repeat:-1,
yoyo:true,
duration:2,
ease:"sine.inOut"
});

// Glow pulse

gsap.to(".glow",{
scale:1.2,
opacity:.25,
repeat:-1,
yoyo:true,
duration:2
});

// Mouse parallax

document.addEventListener("mousemove",(e)=>{

let x=(e.clientX/window.innerWidth-.5)*40;
let y=(e.clientY/window.innerHeight-.5)*40;

gsap.to(".car",{
x:x,
y:y,
duration:1
});

gsap.to(".glow",{
x:x*0.5,
y:y*0.5,
duration:1
});

});
