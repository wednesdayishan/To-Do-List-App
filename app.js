const button = document.querySelector('button');
const inputdata = document.querySelector('#main-input');
const myList = document.querySelector('#container-ul');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
  if (inputdata.value !== '') {
    const li = document.createElement('LI');

    li.innerHTML = `${inputdata.value
    }<span><i class="fas fa-plus add-todo-to-main-li"></i></span>`
      + '<input type ="text" placeholder="Add to dos" class = "add-to-list hide">'
      + '<ul class = "hide">'
      + '<li class = "nestedLi" >Wash Cloths <i class="fas fa-trash-alt delete-todo"></i></li>'
      + '</ul>';
    li.classList.add('main-li');
    myList.appendChild(li);
    inputdata.value = '';
  }
});

inputdata.addEventListener('keyup', (event) => {
  if (event.which === 13) {
    if (inputdata.value !== '') {
      const li = document.createElement('LI');

      li.innerHTML = `${inputdata.value
      }<span><i class="fas fa-plus add-todo-to-main-li"></i></span>`
                      + '<input type ="text" placeholder="Add to dos" class = "add-to-list hide">'
                      + '<ul class = "hide">'
                      // + '<li class = "nestedLi" >Wash Cloths <i class="fas fa-trash-alt delete-todo"></i></li>'
                      + '</ul>';
      li.classList.add('main-li');
      myList.appendChild(li);
      inputdata.value = '';
    }
  }
});

myList.onclick = (event) => {
  if (event.target.classList.contains('add-todo-to-main-li')) {
    event.target.parentNode.parentNode.querySelector('input').classList.toggle('hide');
  } else if (event.target.className === 'main-li') {
    event.target.querySelector('ul').classList.toggle('hide');
  } else if (event.target.classList.contains('nestedLi')) {
    event.target.classList.toggle('lineThrough');
  } else if (event.target.classList.contains('delete-todo')) {
    console.log(event.target.parentNode.parentNode.children.length);
    if (event.target.parentNode.parentNode.children.length === 1) {
      event.target.parentNode.parentNode.parentNode.remove();
    } else {
      event.target.parentNode.remove();
    }
  }
};

myList.addEventListener('keyup', (event) => {
  if (event.which === 13) {
    if (event.target.value != '') {
      const li = document.createElement('LI');
      li.innerHTML = `${event.target.value}<i class="fas fa-trash-alt delete-todo">`;
      li.classList.add('nestedLi');
      event.target.parentNode.querySelector('ul').appendChild(li);
      event.target.value = '';
    }
  }
});

h1.onclick = () => {
  inputdata.classList.toggle('hide');
};
