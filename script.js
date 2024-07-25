let index = 0,
interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 2000);
  }, index++ * (interval / 3))
}

const rotate = [
  {top: "50%",
   left: "50%", 
   transform: "translate(-50%, -50%) rotate(0deg) scale(0)",
  },
  {top: "50%",
   left: "50%", 
   transform: "translate(-50%, -50%) rotate(360deg) scale(1)",
  }
];

const rotateTiming = {
  duration: 2000,
  iterations: 1
};

document.getElementById("galaxy-h1").addEventListener("mouseenter", ()=>{
  document.getElementById("galaxy-h1").animate(rotate, rotateTiming);
})