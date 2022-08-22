const addWish = document.querySelector(".addButton");
const input = document.querySelector(".inputName");
const li = document.querySelector('li');
   

function add() {
    if (!input.value) return;
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const delbtn = document.createElement('button');
    ul.append(li);
    ul.append(delbtn);
    delbtn.classList.add('delbtn');
    li.innerText = input.value;
    input.value = '';
    delbtn.innerText = 'X';


    function del() {
        li.remove();
        delbtn.remove();
        delbtn.removeEventListener("click", del);
    }
    delbtn.addEventListener("click", del);
}

addWish.addEventListener("click", add);

