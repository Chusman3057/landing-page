// Navbar responsive
const togglebtn = document.getElementsByClassName("toggle_btn")[0];
const togglebtnIcon = document.getElementsByClassName("toggle_btn i")[0];
const dropdownMenu = document.getElementsByClassName("dropdown_menu")[0];

togglebtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  togglebtnIcon.classList.isOpen ? "uil uil-multiply" : "uil uil-bars";
};

// <!-- first slider featured section -->

// Senond slider client section
