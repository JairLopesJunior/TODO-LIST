;(function(){
    "use strict";

    // Armazenar o DOM em variaveis
    const itemInput = document.getElementById("item-input")
    const todoItemBtn = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

    let arrTasks = [
        {
            name: "task 1",
            createAt: Date.now(),
            completed: false
        }
    ]

    function addEventLi(li){
        li.addEventListener("click", function(){
            console.log(this)
        })
    }

    function generateLiTask(obj){
        const li = document.createElement("li")
        li.className = "todo-item"
        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        addEventLi(li)

        return li;
    }

    function renderTasks(){
        ul.innerHTML = "";
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTask(task))
        });
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })

    }

    todoItemBtn.addEventListener("submit", function(e){
        e.preventDefault(); // Não envia o formulario
        console.log(itemInput.value);
        addTask(itemInput.value);     
        renderTasks();   
        itemInput.valeu = "";
        itemInput.focus();
    });

    renderTasks();

})()