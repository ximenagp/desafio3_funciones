/*3.1 Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función*/

/* 
ele = document.getElementById('ele1')
  function pintar() {
    ele.style.backgroundColor = 'yellow'
    }
    ele.addEventListener('click', pintar);
*/

/*3.2 Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color.*/

document.getElementById ('ele1').style.backgroundColor ='green';
ele = document.getElementById('ele1')
  function pintar() {
    ele.style.backgroundColor = 'yellow'
    }
    ele.addEventListener('click', pintar);