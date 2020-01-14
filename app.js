let button = document.querySelector('button');
let inputdata = document.querySelector('#main-input');
let myList = document.querySelector('#container-ul');
let deleteLi = document.querySelectorAll('span');
let h1 = document.querySelector('h1');
let mainInput = document.querySelector('#main-input');
// const addingElementsToList = ()

button.addEventListener('click', function (event) {
  if(inputdata.value != ''){
    let li = document.createElement("LI");

    li.innerHTML =  inputdata.value +
                    '<span><i class="fas fa-plus add-todo-to-main-li"></i></span>' +
                    '<input type ="text" placeholder="Add to dos" class = "add-to-list hide">'+
                    '<ul class = "hide">' +
                    '<li class = "nestedLi" >Wash Cloths <i class="fas fa-trash-alt delete-todo"></i></li>'+
                    '</ul>';
    li.classList.add('main-li');
    myList.appendChild(li);
    inputdata.value = '';
  }
});

inputdata.addEventListener('keyup', function (event) {
  if(event.which === 13){
    if(inputdata.value != ''){
      let li = document.createElement("LI");
  
      li.innerHTML =  inputdata.value +
                      '<span><i class="fas fa-plus add-todo-to-main-li"></i></span>' +
                      '<input type ="text" placeholder="Add to dos" class = "add-to-list hide">' +
                      '<ul class = "hide">' +
                      '<li class = "nestedLi" >Wash Cloths <i class="fas fa-trash-alt delete-todo"></i></li>'+
                      '</ul>';
      li.classList.add('main-li');
      myList.appendChild(li);
      inputdata.value = '';
    }
  }
  
});

myList.onclick = function(event) {
  if(event.target.classList.contains('add-todo-to-main-li')){
    event.target.parentNode.parentNode.querySelector('input').classList.toggle('hide');
  } else if(event.target.className === "main-li"){
    event.target.querySelector('ul').classList.toggle('hide');
  } else if(event.target.classList.contains('nestedLi')) {
    event.target.classList.toggle('lineThrough');
  } 
  else if (event.target.classList.contains('delete-todo')) {
    event.target.parentNode.remove();
  }
}

myList.addEventListener('keyup', function(event) {
  if(event.which === 13){
    if(event.target.value != ''){
      let li = document.createElement("LI");
      li.innerHTML =  event.target.value + '<i class="fas fa-trash-alt delete-todo">';
      li.classList.add('nestedLi');
      event.target.parentNode.querySelector('ul').appendChild(li);
      event.target.value = '';
    }
  }
});

h1.onclick = function (event) {
  inputdata.classList.toggle('hide');
}
