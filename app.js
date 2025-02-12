// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista
para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar".
Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo"
seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
1. Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. */


// declaramos la lista(Array) donde se van a guardar los nombres de los amigos
let amigos = [];
let amigoSecreto = "";    // declaramos la variable para guardar el amigo secreto

// Declaramos la funcion Onclick para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value.trim();   // usamos trim() para eliminar espacios en blanco
    // vamos a validar que el campo no este vacio
    if(amigo === ""){
        alert("Por favor, inserte un nombre");  // mensaje de alerta cuando el campo este vacio y se de click en el boton añadir
        return;  // el return en este caso nos saca de la funcion si el campo esta vacio
    }
    amigos.push(amigo);   // agregar el nuevo amigo a la lista amigos
    //console.log(amigos);  // para mirar en la consola si se esta agregando los nombres a la lista
    limpiarCaja();  // limpiar la caja despues de agregar el nombre de cada amigo
    mostrarAmigos();  // Actualizar la lista de amigos en la pagina
}


// vamos a crear una funcion para limpiar la caja despues de cada nombre ingresado y que el usuario tenga una mejor experiencia
function limpiarCaja(){
     document.querySelector("#amigo").value = ""; // en este caso usamos otra forma de llamar el id="amigo" de nuestro input pero con queryselector - el signo # indica que es un id
}


/* Función para mostrar la lista de amigos en la página - El resultado es que cada vez que se llama a la funtion mostrarAmigos(),
la lista de amigos en la página se actualiza para reflejar el contenido actual del array amigos. */
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");   // se obtiene el elemento HTML con el id="listaAmigos" y se guarda en la variable lista.
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla
    amigos.forEach(function(amigo){    // Se utiliza el método forEach para recorrer cada elemento del array amigos. La función anónima dentro del forEach se ejecuta una vez por cada amigo en el array.
        let li = document.createElement("li");   // Dentro del bucle forEach, se crea un nuevo elemento <li> (elemento de lista) para cada amigo.
        li.textContent = amigo;   // El contenido de texto del nuevo elemento <li> se establece en el nombre del amigo actual.
        lista.appendChild(li);   // El nuevo elemento <li> se añade como hijo del elemento <ul> (lista), actualizando así la lista visible en la página.
    });
}


// Declaramos la funcion Onclick para sortear amigos
function sortearAmigo(){
    // Comprobar si el Array (amigos) no este vacio - usamos .length === 0 para verificar que el array no este vacio
    if(amigos.length === 0){
        alert("No hay amigos en la lista para asignar");
        return;    // el return nos saca de la funcion si el Array esta vacio
    }
    /* generamos un indice aleatorio - La variable let indiceAleatorio se declara dentro de la función sortearAmigo porque su propósito
    es generar un índice aleatorio cada vez que se llama a la función. */
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);   // generamos el indice aleatorio del Array (amigos)
    amigoSecreto = amigos[indiceAleatorio];    // obtenemos el nombre sorteado utilizando el indice aleatorio y lo almacenamos en la variable amigoSecreto
    // llamamos la funcion mostrarAmigoSecreto para mostrar en el elemento de resultado
    mostrarAmigoSecreto(amigoSecreto);
}


// creamos la funcion mostrar amigo secreto en el elemento resultado
function mostrarAmigoSecreto(){
    let resultado = document.getElementById("resultado");   // se obtiene el elemento HTML con el id="resultado" y se guarda en la variable lista.
    resultado.innerHTML = "";   // limpiar el contenido antes de actualizarlo
    let li = document.createElement("li");   // Se crea un nuevo elemento <li> (elemento de lista) que se usará para mostrar el nombre del amigo secreto.
    li.textContent = `El amigo secreto es ${amigoSecreto}`;    // El contenido de texto del nuevo elemento <li> se establece en la variable amigoSecreto 
    resultado.appendChild(li);   // el nuevo elemento <li> se añade como hijo del elemento <ul> (resultado), actualizando así la lista visible en la página con el nombre del amigo secreto.
}



