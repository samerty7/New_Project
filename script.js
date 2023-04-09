const widget = document.getElementById("widget");
const panel = document.getElementById("panel");

widget.addEventListener("click", () => {
  panel.classList.toggle("expanded");
});
