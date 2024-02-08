var swiper = new Swiper(".blog-slider", {
    loop: true,
    slidesPerView: "1",
    speed: 100,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false,
    },
    mousewheel: {
        invert: false,
    },
    autoplay: {
        delay: 4500,
    },
    breakpoints: {
        0: {
            effect: "slide",
            centeredSlides: false,
        },
        768: {
            slidesPerView: "2",
            centeredSlides: true,
        },
        1200: {
            slidesPerView: "3",
            centeredSlides: true,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction"
    },
  
  });
  

/*-------------------------------next and back -----------------*/


document.addEventListener("DOMContentLoaded", function() {
    let current = 1; // Variable para rastrear el div actual mostrado

    // Función para mostrar los divs en el rango especificado
    function showDivs(start, end) {
        const container = document.querySelector('.containerc');
        const divs = container.querySelectorAll('div[id^="p"]');
        divs.forEach((div, index) => {
            if (index + 1 >= start && index + 1 <= end) {
                div.style.display = "block"; // Muestra el div si está en el rango
            } else {
                div.style.display = "none"; // Oculta el div si está fuera del rango
            }
        });
    }

    // Mostrar los primeros 10 divs al cargar la página
    showDivs(1, 15);

    // Botón Siguiente
    document.getElementById("next").addEventListener("click", function() {
        if (current + 15 <= 20) { // Si hay al menos 15 divs más para mostrar
            current += 15; // Actualiza la posición actual
            showDivs(current, current + 9); // Muestra los siguientes 10 divs
        }
    });

    // Botón Anterior
    document.getElementById("back").addEventListener("click", function() {
        if (current - 15 >= 1) { // Si hay al menos 10 divs anteriores para mostrar
            current -= 15; // Actualiza la posición actual
            showDivs(current, current + 14); // Muestra los 10 divs anteriores
        }
    });
});



// ------------------------------- FOOTER------------------------












