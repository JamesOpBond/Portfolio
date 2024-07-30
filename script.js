document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('tasks-list');
    const taskItem = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.classList.add('task-text');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', function() {
        editTask(taskItem, taskContent);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        deleteTask(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

function editTask(taskItem, taskContent) {
    const newTaskText = prompt('Edit your task:', taskContent.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskContent.textContent = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.btn');
    const display = document.querySelector('#display');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const input = display.value;
            const lastChar = input.charAt(input.length - 1);
            const operators = ['+', '-', '*', '/'];

            if (button.innerText === '=') {
                try {
                    const result = eval(input);

                    if (input === '5+5') {
                        alert("Zors is SUS!");
                    }

                    if (result == 69) {
                        alert("That's SUS mate!");
                    }

                    display.value = result;
                } catch (e) {
                    display.value = 'Error';
                }
            } else if (button.innerText === 'C') {
                display.value = '';
            } else {
                if (operators.includes(button.innerText)) {
                    if (operators.includes(lastChar)) {
                        display.value = input.slice(0, -1) + button.innerText;
                    } else {
                        display.value += button.innerText;
                    }
                } else {
                    display.value += button.innerText;
                }
            }
        });
    });
});
