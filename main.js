const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let addBtn = $(".add-btn");
let closeModalBtn = $(".modal-close");
let cancelModalBtn = $(".btn-cancel");
let addTaskModal = $(".modal-overlay");
let todoForm = $(".todo-app-form");

let inputElement = $("#taskTitle.form-input");
let textAreaElement = $(".form-textarea");
let categoryElement = $("#taskCategory.form-select");
let priorityElement = $("#taskPriority.form-select");
let startTimeElement = $("#startTime.form-input");
let endTimeElement = $("#endTime.form-input");
let taskDateElement = $("#taskDate.form-input");
let taskColorElement = $("#taskColor.form-select");

let newTask = {
  title: "Học lập trình tại F8",
  description: "Học lập trình là không ngừng bỏ cuộc",
  category: "",
  priority: "",
  startTime: "20:00",
  endTime: "00:00",
  dueDate: "",
  cardColor: "",
  isCompleted: false,
};

let todoTasks = [];
todoTasks.unshift(newTask);
let taskList = $(".task-grid");
let html = todoTasks
  .map(
    (task) =>
      `
  <div class="task-card green">
  <div class="task-header">
    <h3 class="task-title">${task.title}</h3>
    <button class="task-menu">
      <i class="fa-solid fa-ellipsis fa-icon"></i>
      <div class="dropdown-menu">
        <div class="dropdown-item">
          <i class="fa-solid fa-pen-to-square fa-icon"></i>
          Edit
        </div>
        <div class="dropdown-item complete">
          <i class="fa-solid fa-check fa-icon"></i>
          Mark as Active
        </div>
        <div class="dropdown-item delete">
          <i class="fa-solid fa-trash fa-icon"></i>
          Delete
        </div>
      </div>
    </button>
  </div>
  <p class="task-description">
    ${task.description}
  </p>
  <div class="task-time">${task.startTime} - ${task.endTime}</div>
</div>
    `
  )
  .join("");

// Open Form + Focus Function
function openForm() {
  addTaskModal.className = "modal-overlay show";
  setTimeout(() => {
    inputElement.focus();
  }, 100);
}

// Close Form Function
function closeForm() {
  addTaskModal.className = "modal-overlay";
}

// Hiển thị Modal thêm mới + Focus input
addBtn.onclick = openForm;

openForm(); //Mở sẵn form khi vào trang web

// Đóng Modal thêm mới
closeModalBtn.onclick = closeForm;
cancelModalBtn.onclick = closeForm;

// Xử Lý Khi Form Submit
todoForm.onsubmit = function (event) {
  event.preventDefault();
  const formValues = Object.fromEntries(new FormData(todoForm));
  console.log(formValues);
};

function renderTasks() {
  taskList.innerHTML = html;
}

renderTasks();
