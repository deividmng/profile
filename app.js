// Esperamos a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos todos los párrafos con la clase .small
  const smallParagraphs = document.querySelectorAll(".small");

  // Definimos la variable para el desplazamiento horizontal inicial
  let offsetX = 0;

  // Definimos la función para el efecto de movimiento y transición de tamaño
  function moveAndScaleParagraphs() {
    // Incrementamos el desplazamiento horizontal en 1 píxel
    offsetX++;

    // Incrementamos el tamaño del párrafo durante el desplazamiento
    const scale = 1 + offsetX * 0.005;

    // Aplicamos la transformación con el desplazamiento y tamaño a cada párrafo
    smallParagraphs.forEach(paragraph => {
      paragraph.style.transform = `translateX(${offsetX}px) scale(${scale})`;

      // Si el desplazamiento supera el ancho del contenedor, lo reiniciamos
      if (offsetX >= paragraph.parentElement.clientWidth) {
        offsetX = -paragraph.clientWidth;
      }
    });
  }

  // Hacemos que la función se ejecute cada 10 milisegundos (0.01 segundos)
  setInterval(moveAndScaleParagraphs, 10);
});


var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

// Function to animate the font size of the element with class 'top-bottom-z'
