const searchbar = document.getElementById("container");
const input = document.querySelector("input");
let focus = false;

input.onfocus = () => {
  focus = true;
  console.log(focus);
};

input.onblur = () => {
  input.style.width = "0";
  focus = false;
  console.log(focus);
};

searchbar.addEventListener("mouseout", () => {
  if (focus === false) {
    input.style.width = "0";
  }
});

searchbar.addEventListener("mouseover", () => {
  input.style.width = "300px";
});
