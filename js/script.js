// js/script.js
let esferasActivas = 0;

function activarEsfera(elemento) {
    if (!elemento.classList.contains('activa')) {
        elemento.classList.add('activa');
        elemento.style.transform = "scale(1.3) rotate(360deg)";
        elemento.style.transition = "all 0.5s";
        elemento.innerText = "⭐";
        esferasActivas++;
        
        if (esferasActivas === 7) {
            setTimeout(() => {
                alert("¡Has reunido las 7 esferas! ¡¡SHENLONG APARECE Y CONCEDE TU DESEO PARA AYUDAR A GOKU Y SALVAR A CIBERTEC DE LA DESTRUCCIÓN!! ¡BIEN HECHO!");
            }, 500);
        }
    }
}
