// let btnEle = document.getElementById("btn");
// function theme() {
//     let d = document.getElementById("container")
//     d.classList.toggle("dark");
//     console.log(d);
// }
// click is event and theme is function name 
// btnEle.addEventListener("click", theme)
let btnEle = document.getElementById("btn");
btnEle.addEventListener("click", function theme(){
    let d = document.getElementById("container");
    d.classList.toggle("dark");
    let isdark = d.classList.contains("dark");
    localStorage.setItem("Themepreference", isdark?"dark": "light");


});
window.addEventListener("DOMContentLoaded",
  function() {
    let tp = this.localStorage.getItem("Themepreference")
    if (tp === "dark") {
      let d1 = document.getElementById("container")
      d1.classList.add("dark")
    }
  }
)
