function toggle() {
  const body_element = document.body;
  const toggle_box = document.querySelector(".dark-mode-toggle-box");
  const toggle_btn = document.querySelector(".toggle-btn");
  body_element.classList.toggle("dark-mode-of-body");
  toggle_box.classList.toggle("dark-mode-of-toggle-box");
  toggle_btn.classList.toggle("dark-mode-of-toggle-btn");
  if (toggle_btn.innerHTML == "☑️") {
    toggle_btn.innerHTML = "✅";
  } else {
    toggle_btn.innerHTML = "☑️";
  }
}
