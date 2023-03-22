const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach (trigger => trigger.addEventListener("click", togglemodal));

function togglemodal(e) {
    e.preventDefault();
    modalContainer.classList.toggle("active-modal");
}