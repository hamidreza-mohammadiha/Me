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
