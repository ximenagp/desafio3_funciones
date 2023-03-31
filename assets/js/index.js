/*
Crea un script que guarde dentro de una variable global un color
dependiendo de la letra del teclado presionada.
○ Al presionar la letra a un color a tu elección.
○ Al presionar la letra s un segundo color a tu elección.
○ Al presionar la letra d un tercer color al presionar la letra d.
○ Para guardar el color revisa el tip al final del enunciado.

Dentro del script agrega el evento que al hacerle click a uno de los divs, este
cambie de color al color seleccionado. Utiliza addEventListener para agregar
el evento.
*/
let colorSeleccionado='';
document.addEventListener('keydown',(e)=>{
    if(e.key==='a'){
        colorSeleccionado='orange';
        console.log(colorSeleccionado);
    }else if(e.key==='s'){
        colorSeleccionado='purple';
        console.log(colorSeleccionado);
    }else if(e.key==='d'){
        colorSeleccionado='pink';
        console.log(colorSeleccionado);
    }
});
const uno=document.getElementById('uno');
uno.addEventListener('click',()=>{
   pintar(colorSeleccionado,uno);
});
const dos=document.getElementById('dos');
dos.addEventListener('click',()=>{
   pintar(colorSeleccionado,dos);
});
const tres=document.getElementById('tres');
tres.addEventListener('click',()=>{
   pintar(colorSeleccionado,tres);
});
const cuatro=document.getElementById('cuatro');
cuatro.addEventListener('click',()=>{
   pintar(colorSeleccionado,cuatro);
});