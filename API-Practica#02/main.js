// fetch es la manera nativa de JS para hacer consulta de datos de una API
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 */

      //Función flecha - Async - Await
const traerDatos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const datos = await response.json();
    
    console.log(datos)
    
    //Imprimos los demas valores del objeto
    console.log(datos.userId)
    console.log(datos.id)
    console.log(datos.title)
    console.log(datos.completed)

    /* Accedemos al ID de nuestro elemento HTML y usamos el operador backticks `` para insertar HTML con el uso de variables */
    document.getElementById("datos").innerHTML= `
    <h3>El id de usuario es: ${datos.userId}</h3>
    <h3>El id de la tarea es: ${datos.id}</h3>
    <h3>El título de la tarea es: ${datos.title}</h3>
    <h3>El estado de la tarea es: ${datos.completed}</h3>
    `
}

traerDatos()