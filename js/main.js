var Task = (function() {

  var arrayTask = [];

  // Función que renderiza el formulario
  function renderStructure() {
    // Creando elementos del HTML.
    var $elementH1 = document.createElement('h1');
    var $elementInput = document.createElement('input');
    var $elementInput2 = document.createElement('input');
    var $elementButton = document.createElement('button');
    var $elementUl = document.createElement('ul');

    // Asignando HTML a los elementos.
    $elementH1.innerText = "Workshop - ToDoList";
    $elementButton.innerHTML = "Add";

    // Cambiando atributos de los elementos INPUT, UL y BUTTON.
    $elementInput.setAttribute('placeholder', 'Add your task subject');
    $elementInput2.setAttribute('placeholder', 'Add your task description');
    $elementInput.setAttribute('id', 'taskName');
    $elementInput2.setAttribute('id', 'taskDescription');
    $elementButton.setAttribute('id', 'btnadd');
    $elementButton.setAttribute('class', 'btn btn-primary');
    $elementUl.setAttribute('id', 'list');

    // Agregando Evento Clic al botón
    $elementButton.addEventListener('click', function(event){
      add();
    }, false);

    // Dibujar en DOM lo creado.

    document.getElementById('contenedor').appendChild($elementH1);
    document.getElementById('contenedor').appendChild($elementInput);
    document.getElementById('contenedor').appendChild($elementInput2);
    document.getElementById('contenedor').appendChild($elementButton);
    document.getElementById('contenedor').appendChild($elementUl);
  }
  renderStructure();


  // Creando la estructura del elemento Task.
  function createTaskStructure(){
    return {
      title: document.getElementById('taskName').value,
      desc: document.getElementById('taskDescription').value
    };
  }

  // Agregando el elemento a cada posición del array.
  function addArray(){
    var personalTask = createTaskStructure();
    arrayTask.push(personalTask);
    document.getElementById('list').innerHTML += addElementToList();
  }

  // Función que agrega elementos a la lista.
  function addElementToList() {
    return '<li>\
              <h2>' + document.getElementById('taskName').value + '</h2>\
              <p>' + document.getElementById('taskDescription').value + '</p>\
              <input type="checkbox"> Completado <br>\
              <button class="btn btn-danger">Remove</button>\
            </li>'
  }

  // Función para dejar en blanco el input
  function cleanInput() {
    document.getElementById('taskName').value = "";
    document.getElementById('taskDescription').value = "";
  }





  ////////////////////////////////////////////////////
  //     FUNCIONES QUE LLAMA EL RETURN DEL METIDO   //
  ////////////////////////////////////////////////////
  function add(){
    addArray();
    addElementToList();
    cleanInput();
  }

  function remove(){

  }

  function edit(){

  }

  function order(){

  }

  return {
    addTask: function(){
      add();
    },
    removeTask: function(){
      remove();
    },
    editTask: function(){
      edit();
    },
    orderTask: function(){
      order();
    }
  }


})();
