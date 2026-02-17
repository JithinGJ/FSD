const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", addTask);

// Allow Enter key to add task
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create li
    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle completed
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent toggle
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
