const input = document.getElementById('input');
const submit = document.getElementById('submit');
const display = document.getElementById('task-display');

const deltask = document.getElementById('task-display');



eventListeners();

function eventListeners() {

    submit.addEventListener('click', add);

    display.addEventListener('click', remove);
};


function add() {

    if (input.value === '') {
        alert('ENTER TASK TO SUBMIT');

    }
    else {
        const edit = document.createElement('li');
        edit.id = 'task-list';
        edit.innerText = input.value;
        display.appendChild(edit);
        input.value = '';

        const close = document.createElement('a');
        close.id = 'close-btn';
        close.innerHTML = '<img class="close-btn" src="./Assets/x-circle-fill.svg" alt="close button"> ';
        edit.appendChild(close);

    }
};
function remove(e) {

    if (e.target.classList.contains('close-btn')) {



        e.target.parentElement.parentElement.remove();

    };


};