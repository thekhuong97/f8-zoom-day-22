const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let addBtn = $(".add-btn");
let closeModalBtn = $(".modal-close");
let addTaskModal = $(".modal-overlay");
let inputElement = $(".form-input");

addBtn.onclick = function () {
  addTaskModal.className = "modal-overlay show";
  setTimeout(() => {
    inputElement.focus();
  }, 100);
};

closeModalBtn.onclick = function () {
  addTaskModal.className = "modal-overlay";
};
