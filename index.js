let holes = document.getElementsByClassName("hole");
// console.log(holes);
// dir = key value pairs ko form ma dincha
// node list (array like object)
// elemnt - means every thing thats inside tag

// let RandomNumbers = Math.floor(Math.random() * 9);
// let hole = holes[RandomNumbers];
// holes[RandomNumbers].classList.toggle("mole");

// console.log(RandomNumbers);
// console.log(holes);
// console.log(hole);
// console.log(RandomNumbers
// set interval bhnya browser ley diyeko method ho
setInterval(function () {
  // instead of 9 you can also put holes.length
  let RandomNumbers = Math.floor(Math.random() * 9);

  //   holes bhanney array of objects ko index  random number acess gareko
  let hole = holes[RandomNumbers];
  hole.classList.toggle("mole");
}, 1000);
