/* 1. creamos una variable y guardamos nuestra etiqueta de titulo
con alguno de nuestros metodos
2. usamos nuestra atributo .style y le asigamos un color
3. repetimos el proceso para las 3 cards (no es bucle) */

// EJERCICIO 1

let color_title=document.querySelectorAll('.color-title');

color_title.forEach(titles => {
    titles.style.color='red';
});


/* 1. creamos el boton en  nuestro documento html y le asignamos un id
2. creamos nuestra variable y le guardamos nuestro boton con el metodo .querySelector
y le asignamos el #
3. con el nombre dado a ala variable le asiganmos el metodo .onclick y a la funcion
le decimos que nos retorne un log hola.*/

//EJERCICIO 2

let boton=document.querySelector('#boton');
boton.onclick = function () {
    alert("Hola");  
};

// EJERCICIO 3
/* asignamos un id a cada estrella. hacer el llamado del id y almacenarlo en una variable, añadirle a esa variable
el evento onclic, al hacer clic el background debe cambiar a rojo. si se clica una estrella, ella y las anteriores deben colorearse
en amarillo 

let estrella1=document.querySelector('#estrella1');
let estrella2=document.querySelector('#estrella2');
let estrella3=document.querySelector('#estrella3');
let estrella4=document.querySelector('#estrella4');
let estrella5=document.querySelector('#estrella5');

estrella1.onclick=function () {
    estrella1.style.color='red';    
};

estrella2.onclick=function () {
    estrella1.style.color='red';
    estrella2.style.color='red';    
    
};

estrella3.onclick=function () {
    estrella1.style.color='red';
    estrella2.style.color='red';
    estrella3.style.color='red';
};

estrella4.onclick=function () {
    estrella1.style.color='red';
    estrella2.style.color='red';
    estrella3.style.color='red';
    estrella4.style.color='red';
};

estrella5.onclick=function () {
    estrella1.style.color='red';
    estrella2.style.color='red';
    estrella3.style.color='red';
    estrella4.style.color='red';
    estrella5.style.color='red';  
};
*/

//EJERCICIO 3 SEGUNDA SOLUCION

function calificar(item) {
    //console.log(item);
    
    let cont = parseInt(item.id[4]);
  
    //console.log(cont);
  
    for (let i = 0; i < 5; i++) {
      if (i < cont) {
        document.getElementById(`star` + `${i+1}`).style.color = 'orange';
      } else {
        document.getElementById(`star` + `${i+1}`).style.color = 'black';
      }
    };
  };
  


/* 1. creamos un array y guardamos a los integrantes de la familia
2.crear un titulo en html
3. 3.1 debemos recorrer el array: map, foreach, for, while, do while
   3.2 para insertar el elemento creado debemos traer el div,
       para esto creamos un variable y guardamos nuestro div utilizando 
       metodo .querySelector
   3.3 creamos el elemento p
   3.4 insertamos el p dentro de nuestro div con el metodo .appendChild
   3.5 agrego el contenido a mi etiqueta p utilizadno el emtodo innerHtml */

// EJERCICIO 4

let familia=document.querySelector(".container_simpsons");
let simpsons = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

simpsons.forEach(dato=>{
    let p=document.createElement("p");
    p.innerHTML= dato; 
    familia.appendChild(p);
});

/* 1. creamos un array para guardar nuestros objetos.
2. creamos nuestros 4 objetos
3. usamos un forEach para recorrer nuestro array.
5. creamos el contenedor de las cards en html
6. creamos nuestra variable y le guardamos nuestro contenedor con el metodo .querySelector
y le asignamos el #
7. creamos una variable le asignamos el metodo .createElement con un div
8. insertamos el div dentro de nuestro contenedor con el metodo .appendChild
9. a nuestro div le asignamos el metodo innerHTML y utilizamos las cards de boostrap `y usar ${dato.}`*/

// EJERCICIO 5
let producto=[
    {
        nombre: "producto 1",
        precio: 1,
        tienda: "carrefour",
        boton: "saber mas",
        img: ""
    },
    {
        nombre: "producto 2",
        precio: 2,
        tienda: "mercadona",
        boton: "saber mas",
        img: ""
    },
    {
        nombre: "producto 3",
        precio: 3,
        tienda: "lidl",
        boton: "saber mas",
        img: ""
    },
    {
        nombre: "producto 4",
        precio: 4,
        tienda: "aldi",
        boton: "saber mas",
        img: ""
    }
]

producto.forEach(dato=>{
    let cards=document.querySelector('#div_html');
    let div_js =document.createElement('div');
    cards.appendChild(div_js);

    div_js.innerHTML=`
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${dato.nombre} </h5>
          <p class="card-text">Precio: ${dato.precio} </p>
          <p class="card-text">Tienda: ${dato.tienda} </p>
          <a href="#" class="btn btn-primary">${dato.boton} </a>
        </div>
      </div>    
    `
});


//EJERCICIO 6
/* Crea un input en el que todo lo que escribas, se refleje en
otra parte mediante el uso del evento input de javascript */

/*Creo div, input y boton con sus respectivos id, en js llamo esos id y los asignos a variables
creo una variable que almacene el valor del input, creo un parrafo, agrego el valor del input al parrafo
con innerhtml, agrego el parrafo al html con appendChild */

let div_input=document.getElementById('div_input')
let input=document.getElementById('input');
let btn_input=document.querySelector('#btn_input');

btn_input.addEventListener('click', ()=>{
    let valor = input.value;
    let p=document.createElement('p');
    p.innerHTML=`${valor}`;
    div_input.appendChild(p);
});














