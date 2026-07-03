/*=========================================
REVISTA PRESENCIA - JS BASE
=========================================*/

/*-------------------------
1. SCROLL SUAVE EN LINKS
-------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});


/*-------------------------
2. EFECTO EN HEADER AL HACER SCROLL
-------------------------*/
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    }

});


/*-------------------------
3. ANIMACIÓN SIMPLE DE NOTICIAS
-------------------------*/
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold:0.2
});

cards.forEach(card => {

    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});


/*-------------------------
4. MENSAJE DE BIENVENIDA (CONSOLE)
-------------------------*/
console.log("Revista Presencia cargada correctamente 🚀");