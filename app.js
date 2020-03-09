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

//ШООГ ШИДЭХ ЭВЕНТ ЛИСТЕНЭР
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 доторхи санамсаргүй нэг тоо гаргаж ирнэ
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //Шооны зургийг веб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  //Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  //Тоглогчийн ээлжийн оноог өөрчилнө. Буусан тоо нь 1 ээс ялгаатай бол идвэхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ. Буусан тоо= diceNumber
  if (diceNumber !== 1) {
    //1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
    switchToNextPlayer();
  }
});

//Hold товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.
  // var scores = [20, 80];
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Дэлгэц дээр оноог нь өөрчлөнө
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Уг тоглогч хожсан эсэхийг(оноо нь 100 аас их эсэх) шалгах
  if (scores[activePlayer] >= 20) {
    // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
    document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
  }
});
// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //Шоог түр алга болгох
  diceDom.style.display = "none";
}
