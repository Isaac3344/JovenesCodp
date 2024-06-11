

document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa las imágenes materialboxed
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);

    // Agrega un listener para cuando se abre una imagen
    elems.forEach(function(elem) {
        elem.addEventListener('click', function() {
            // Espera un poco a que se muestre el caption
            setTimeout(function() {
                var caption = document.querySelector('.materialbox-caption');
                if (caption) {
                    var imgSrc = elem.src;
                    caption.innerHTML = '<a href="' + imgSrc + '" download class="btn">Descargar Imagen</a>';
                }
            }, 100);
        });
    });
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const carruselCaja = document.getElementById("carrusel-caja");
    const elementos = document.querySelectorAll(".carrusel-elemento");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const totalSlides = elementos.length;

    function updateCarrusel() {
        const offset = -currentIndex * 100;
        carruselCaja.style.transform = `translateX(${offset}%)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarrusel();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarrusel();
    }

    nextButton.addEventListener("click", showNext);
    prevButton.addEventListener("click", showPrev);

    // Auto-slide cada 5 segundos
    setInterval(showNext, 4000);
});

