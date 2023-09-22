let button = document.getElementById("but");
let input = document.getElementById("input");
let imge = document.getElementById("img");
let imageBox = document.getElementById("image-box");
let api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter a valid URL");
    return;
  }
  imge.src = api + input.value;
  imageBox.appendChild(imge);
});