// Obteniendo el elemento con id dataForm
const dataForm = document.querySelector('#dataForm');

// Creando el evento para el elemento datForm
dataForm.addEventListener('submit', CreateTasks);


// Creando la función para crear tareas
function CreateTasks(event) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title: title,
        description: description
    }

    if(localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    document.getElementById('dataForm').reset();
    event.preventDefault();

    // Obteniendo función displayTasks
    displayTasks();
}

// Función para guardar tareas

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let viewTasks = document.getElementById('insertData');

    viewTasks.innerHTML = '';
    for(let element of tasks) {
        viewTasks.innerHTML += `
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                 <div class="card-content white-text">
                    <span class="card-title">${element.title}</span>
                    <p>${element.description}</p>
                </div>
             </div>
          </div>
        </div>
        `;
    }
}