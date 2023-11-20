const inputBox = document.getElementById("input-box")

const listContainer = document.getElementById("list-container")


function addTask(){
    if (inputBox.value==='') {

        //mejorar con sweetAlert
      //  alert("You must write a task");
      Swal.fire('Debes definir una tarea', 'Escribe en el cambo una tarea para agregar a la lista', 'error');
    }else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
      //  span.innerHTML="\u00d7";
      span.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#fef200}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
      li.appendChild(span);
    }

    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName ==="LI") {

        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName ==="SPAN"){

        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();




function obtenerFechaActual() {
    const fecha = new Date();
  
    const dia = agregarCeroDelante(fecha.getDate());
    const mes = agregarCeroDelante(fecha.getMonth() + 1); // Se suma 1 porque los meses en JavaScript van de 0 a 11
    const año = fecha.getFullYear();
  
    return `${dia}/${mes}/${año}`;
  }
  
  function agregarCeroDelante(numero) {
    return numero < 10 ? '0' + numero : numero;
  }
  
  // Uso de la función para obtener la fecha actual en el formato deseado
  const fechaActual = obtenerFechaActual();

  const fecha = document.getElementById("fecha")
  fecha.innerHTML=fechaActual;
  console.log(fechaActual);