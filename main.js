import "./style.scss"

const bowlingFrames1 = document.querySelector('.bowlingFrames1')
const bowlingFrames2 = document.querySelector('.bowlingFrames2')
let totalScore = 0;

function score(e) {
  console.log(`this: ${this}`)
}
console.log(bowlingFrames1)
bowlingFrames1.addEventListener("keydown", score.bind(this))
