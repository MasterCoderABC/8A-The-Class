let index = 0,
interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 20)}%`);
  star.style.setProperty("--star-top", `${rand(-20, 40)}%`);

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

const r = document.querySelector(":root")
document.getElementsByClassName("switch")[0].addEventListener("click", ()=>{
  if (document.querySelector("input").checked) {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    document.querySelector("nav").style.backgroundColor = "white";
    document.getElementById("path").style.fill = "var(--blue)"
    document.getElementById("path2").style.fill = "var(--blue)"
    document.getElementById("path3").style.fill = "var(--blue)"
    r.style.setProperty('--background-color', '#dfdede')
    // Select all elements with the class "my-class"
    const elements = document.querySelectorAll('.studentsP');
    // Loop through the elements and change their style
    elements.forEach(element => {
      element.style.border = '2px solid #222';
});
  } else{
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("body").style.color = "white";
    document.querySelector("nav").style.backgroundColor = "#222";
    document.getElementById("path").style.fill = "var(--lightblue)"
    document.getElementById("path2").style.fill = "var(--lightblue)"
    document.getElementById("path3").style.fill = "var(--lightblue)"
    r.style.setProperty('--background-color', '#343232')
    // Select all elements with the class "my-class"
    const elements2 = document.querySelectorAll('.studentsP');
    // Loop through the elements and change their style
    elements2.forEach(element => {
      element.style.border = '2px solid white';
  });
 }
});