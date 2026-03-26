'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const clickedLink = this;
    const targetPage = this.innerText.trim().toLowerCase().replace(/\s+/g, "-");

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let j = 0; j < navigationLinks.length; j++) {
      if (navigationLinks[j] === clickedLink) {
        navigationLinks[j].classList.add("active");
      } else {
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}


// project modal variables
const projectItems = document.querySelectorAll("[data-project-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalClose = document.querySelector("[data-project-modal-close]");
const projectModalBadge = document.querySelector("[data-project-modal-badge]");
const projectModalYear = document.querySelector("[data-project-modal-year]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalDesc = document.querySelector("[data-project-modal-desc]");
const projectModalTags = document.querySelector("[data-project-modal-tags]");

// project modal toggle function
const projectModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
}

// add click event to all project cards
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function () {

    const badgeClass = this.dataset.badgeClass;
    const badge = this.dataset.badge;
    const year = this.dataset.year;
    const title = this.dataset.title;
    const desc = this.dataset.desc;
    const tags = this.dataset.tags.split(",");

    // set badge
    projectModalBadge.className = "journey-badge " + badgeClass;
    projectModalBadge.innerText = badge;

    // set year, title, desc
    projectModalYear.innerText = year;
    projectModalTitle.innerText = title;
    projectModalDesc.innerText = desc;

    // set tags
    projectModalTags.innerHTML = "";
    tags.forEach(function (tag) {
      const li = document.createElement("li");
      li.className = "journey-tag";
      li.innerText = tag.trim();
      projectModalTags.appendChild(li);
    });

    projectModalFunc();
  });
}

// close modal on button and overlay click
projectModalClose.addEventListener("click", projectModalFunc);
projectOverlay.addEventListener("click", projectModalFunc);


// transcript modal
const transcriptBtn = document.querySelector("[data-transcript-btn]");
const transcriptModal = document.querySelector("[data-transcript-modal]");
const transcriptClose = document.querySelector("[data-transcript-close]");
const transcriptOverlay = document.querySelector("[data-transcript-overlay]");

const transcriptModalFunc = function () {
  transcriptModal.classList.toggle("active");
};

if (transcriptBtn) transcriptBtn.addEventListener("click", transcriptModalFunc);
if (transcriptClose) transcriptClose.addEventListener("click", transcriptModalFunc);
if (transcriptOverlay) transcriptOverlay.addEventListener("click", transcriptModalFunc);