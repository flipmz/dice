//Тоглогчийн ээлжийг хадгалах хувьсагч; 1р тоглогчийг 0;2р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
//Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Идвэхитэй тоглогчийн улаан дотор хадгалагдаж байгаа ээлжийн оноог цуглуулж байгаа хувьсагч
var roundScore = 0;

//Шоо аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

var dice = Math.floor(Math.random() * 6) + 1;

//программ эхлэхэд бэлтгэх
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;

window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Шоо:" + dice);
