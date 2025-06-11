const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let addBtn = $(".add-btn");
let closeModalBtn = $(".modal-close");
let addTaskModal = $(".modal-overlay");

addBtn.onclick = function () {
  addTaskModal.className = "modal-overlay show";
};

closeModalBtn.onclick = function () {
  addTaskModal.className = "modal-overlay";
};
