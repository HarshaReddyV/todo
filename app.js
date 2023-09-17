const input = document.getElementById('input');
const submit = document.getElementById('submit');
const display = document.getElementById('task-display');
const deltask = document.getElementById('task-display');

let tasks;

window.addEventListener("load", function get(e) {
    if (localStorage.getItem('tasks') === null) {
        tasks = [];


    }
    else {

        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(function add(task) {
            const edit = document.createElement('li');
            edit.id = 'task-list';
            edit.innerText = task;
            display.appendChild(edit);

            const close = document.createElement('a');
            close.id = 'close-btn';
            close.innerHTML = '<img class="close-btn" src="./Assets/x-circle-fill.svg" alt="close button"> ';
            edit.appendChild(close);



        })

    }
})

eventListeners();

function eventListeners() {

    submit.addEventListener('click', add);
    document.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            add();
        }
    });

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


        //after submit the task takes up the text and pushed into tasks array which is then persisted to local storage
        let task;
        task = input.value;
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));


        const close = document.createElement('a');
        close.id = 'close-btn';
        close.innerHTML = '<img class="close-btn" src="./Assets/x-circle-fill.svg" alt="close button"> ';
        edit.appendChild(close);



        input.value = '';

    }
};
function remove(e) {

    if (e.target.classList.contains('close-btn')) {

        //x takes the value of task removed and removes it from the tasks array and then persists the tasks back to loacl storage
        let x = e.target.parentElement.parentElement.innerText;
        console.log(tasks);
        console.log(tasks.indexOf(x));
        tasks.splice(tasks.indexOf(x), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        e.target.parentElement.parentElement.remove();
    };

};