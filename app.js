//Тоглогчийн ээлжийг хадгалах хувьсагч; 1р тоглогчийг 0;2р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
//Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Идвэхитэй тоглогчийн улаан дотор хадгалагдаж байгаа ээлжийн оноог цуглуулж байгаа хувьсагч
var roundScore = 0;

//Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//программ эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
