<--day8-->
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {

    const task = taskInput.value;

    if (task === "") {
        alert("Task enter cheyyi!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = task + 
    '<button class="deleteBtn">Delete</button>';

    taskList.appendChild(li);

    taskInput.value = "";

    const deleteBtn = li.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
});

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});
