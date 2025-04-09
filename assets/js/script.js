// nav bar menu 

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".nav-menu");
    const navMenu = document.querySelector(".nav-links ul");
    const navLinks = navMenu.querySelectorAll("a");
  
    // Mostrar menú al hacer clic en el botón
    menuButton.addEventListener("click", () => {
      navMenu.classList.add("active");
    });
  
    // Ocultar menú cuando el cursor sale del área
    navMenu.addEventListener("mouseleave", () => {
      navMenu.classList.remove("active");
    });
  
    // Ocultar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  });
  
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

//copy email "contact me"
  
function copyEmail() {
    const email = document.getElementById("email").textContent;
    const msg = document.getElementById("copy-msg");
  
    navigator.clipboard.writeText(email)
      .then(() => {
        msg.textContent = "Copied!";
        setTimeout(() => {
          msg.textContent = "";
        }, 1000); // El mensaje desaparece después de 2 segundos
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        msg.textContent = "Failed to copy";
      });
  }
  