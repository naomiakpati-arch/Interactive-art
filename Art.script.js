const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const starField = document.querySelector(".star-field");
const immersiveButton = document.querySelector("#immersiveBtn");

if (starField && !reduceMotion.matches) {
    for(let index = 0; index < 90; index += 1) {
    const star = document.createElement("span");
    const size = Math.random() * 2.5 + 1;

    star.className = "star";
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    starField.appendChild(star);
}
document.addEventListener("pointermove",(event) => {
    if (event.pointerType=== "touch") return;
    const x =(event.clientX / window.innerWidth - 0.5) * -12;
    const y =(event.clientY / window.innerHeight - 0.5) * -12;
    document.documentElement.style.setProperty("--pointer-x", `${x}px`);
    document.documentElement.style.setProperty("--pointer-y", `${y}px`);
  });
}
if (immersiveButton) {
    immersiveButton.addEventListener("click",() => {
      const isImmersive = document.body.classList.toggle("is-immersive");
      immersiveButton.textContent = isImmersive
           ? "Exit immersive view"
           : "Enter immersive view";

    });
}
