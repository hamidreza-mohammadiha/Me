document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const stageSelect = document.getElementById("stageSelect");
  const addBtn = document.getElementById("addBtn");

  const lists = {
    todo: document.getElementById("todo-list"),
    doing: document.getElementById("doing-list"),
    done: document.getElementById("done-list"),
  };

  function loadTasks() {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    saved.forEach(addTaskToDOM);
  }

  function saveTasks() {
    const tasks = [];
    Object.keys(lists).forEach(stage => {
      lists[stage].querySelectorAll(".task").forEach(task => {
        tasks.push({ text: task.dataset.text, stage, repeat: task.dataset.repeat === "true" });
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

    function renderTasks() {
    // ... existing code ...

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.draggable = true;
        taskElement.setAttribute('data-id', task.id);
        
        // Create task text container
        const taskTextContainer = document.createElement('div');
        taskTextContainer.style.display = 'flex';
        taskTextContainer.style.justifyContent = 'space-between';
        taskTextContainer.style.alignItems = 'center';
        taskTextContainer.style.width = '100%';
        
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '❌';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering drag events
        deleteTask(task.id);
        });
        
        taskTextContainer.appendChild(taskText);
        taskTextContainer.appendChild(deleteBtn);
        taskElement.appendChild(taskTextContainer);
        
        // ... rest of existing code ...
    });
    }

    function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
    }

// ... existing code ...

  function addTaskToDOM({ text, stage, repeat }) {
    const div = document.createElement("div");
    div.className = `task ${stage}`;
    div.dataset.text = text;
    div.dataset.repeat = repeat;

    const span = document.createElement("span");
    span.textContent = text;

    const star = document.createElement("span");
    star.className = "star";
    star.textContent = repeat === "true" ? "⭐" : "☆";

    star.addEventListener("click", () => {
      div.dataset.repeat = div.dataset.repeat === "true" ? "false" : "true";
      star.textContent = div.dataset.repeat === "true" ? "⭐" : "☆";
      if (div.dataset.repeat === "true") {
        lists[stage].prepend(div);
      }
      saveTasks();
    });

    div.appendChild(span);
    div.appendChild(star);
    lists[stage].appendChild(div);
  }

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    const stage = stageSelect.value;
    if (!text) return;
    addTaskToDOM({ text, stage, repeat: false });
    saveTasks();
    taskInput.value = "";
  });

  document.querySelector("footer").insertAdjacentHTML("beforeend", `<button id="resetBtn">Reset All</button>`);

  document.getElementById("resetBtn").addEventListener("click", () => {
    Object.values(lists).forEach(list => list.innerHTML = "");
    localStorage.removeItem("tasks");
  });

  loadTasks();
});
