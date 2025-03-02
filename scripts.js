




document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .kuva-otto img"); 

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0 }); 

    fadeElements.forEach(el => observer.observe(el)); 
});


document.addEventListener("visibilitychange", () => {
    constvideo = document.getElementById("background-video");
    if (document.visibilityState === "visible") {}
});



