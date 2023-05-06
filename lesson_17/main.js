// DZ 19.

const input = document.querySelector("#input");
const container = document.querySelector("#container");

input.addEventListener("focus", () => {
  container.style.display = "block";
  container.style.border = "solid green";
  container.style.background = "black";
  container.style.width = "13px";
});

input.addEventListener("blur", () => {
  container.style.display = "none";
});
