//Создай страницу, подключите скрипт. Создайте функцию, которая выведет сообщение в консоли «Я учу JavaScript!»
const firstFunction = () => console.log("Я учу JavaScript!");
firstFunction();

function Previous() {
  let image = document.getElementById("imgcat");
  image.src = "././assets/img/cat2.jpg";
}
function Next() {
  let image = document.getElementById("imgcat");
  image.src = "././assets/img/cat1.jpg";
}
