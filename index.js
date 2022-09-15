/* 1. creamos una variable y guardamos nuestra etiqueta de titulo
con alguno de nuestros metodos
2. usamos nuestra atributo .style y le asigamos un color
3. repetimos el proceso para las 3 cards (no es bucle) */

// EJERCICIO 1

let titulo1 = document.querySelector('.card1');
let titulo2 = document.querySelector('.card2');
let titulo3 = document.querySelector('.card3');

titulo1.style.color = 'red';
titulo2.style.color = 'blue';
titulo3.style.color = 'green';


/* 1. creamos el boton en  nuestro documento html y le asignamos un id
2. creamos nuestra variable y le guardamos nuestro boton con el metodo .querySelector
y le asignamos el #
3. con el nombre dado a ala variable le asiganmos el metodo .onclick y a la funcion
le decimos que nos retorne un log hola.*/

//EJERCICIO 2

let boton=document.querySelector('#boton');
boton.onclick = function () {
    alert("Hola");  
}


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




