let score = 0;

let displayTheScore = document.getElementById("score");

let holes = document.getElementsByClassName("hole");
// let randomIndex = Math.floor(Math.random() * holes.length);
// console.log(holes[1].innerHTML);

// console.log(holes[1].classList);

// console.log(holes[randomIndex].classList.toggle("mole"));

setInterval(function () {
  let randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.toggle("mole");
}, 200);

let Ourgame = document.getElementById("whack-a-mole");

Ourgame.addEventListener("click", function (e) {
  //   console.dir(e);

  if (e.target.matches(".mole")) {
    score++;
    e.target.classList.remove("mole");
    displayTheScore.innerHTML = score;
  }
  //   console.log(score);
});
