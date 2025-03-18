let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let rmvBtn = document.createElement("button");
  rmvBtn.innerText = "Remove";
  rmvBtn.classList.add("remove");

  item.appendChild(rmvBtn);
  ul.appendChild(item);

  inp.value = "";
});

// let rmvBtns = document.querySelectorAll(".remove");
// for (rmvBtn of rmvBtns) {
//   rmvBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
