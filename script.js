const header=document.querySelector(".site-header"),menu=document.querySelector(".menu");
menu.addEventListener("click",()=>{header.classList.toggle("open");menu.setAttribute("aria-expanded",header.classList.contains("open"))});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));