let getlang=localStorage.getItem("langDir");
if (getlang) {
  if (getlang=="rtl") {
    changeDir("rtl")
  }else{
    changeDir("ltr")
  }
}
//language
let En = document.getElementById("en-lang");
let Ar = document.getElementById("ar-lang");

En.addEventListener("click", () => changeDir("ltr"));
Ar.addEventListener("click", () => changeDir("rtl"));

function changeDir(dir) {
  document.documentElement.setAttribute("dir", dir);
  localStorage.setItem("langDir", dir);
}