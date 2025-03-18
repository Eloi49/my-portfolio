//Slider "about-me"

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let index = 0;

    function moveSlider(direction) {
        const totalParagraphs = slider.children.length;
        const paragraphsPerView = 2; // Número de párrafos visibles
        index += direction;

        if (index < 0) {
            index += direction * paragraphsPerView;
        }
        if (index >= totalParagraphs) {
            index = 0;
        }

        slider.style.transform = `translateX(-${index * (100 / paragraphsPerView)}%)`;
    }

    slider.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            moveSlider(1); // Scroll hacia abajo, mueve a la derecha
        } else {
            moveSlider(-1); // Scroll hacia arriba, mueve a la izquierda
        }
    });
});
