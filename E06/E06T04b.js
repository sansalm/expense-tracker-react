var input1 = document.getElementById("saveServer");

function setitem() {
  localStorage.setItem("server", input1.value);
  console.log(localStorage.getItem("server"));
  }

console.log(localStorage.getItem("server"));
input1.addEventListener("blur", setitem);