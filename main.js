import "./style.scss"
import * as scoresFile from './bowlingScoresFile'

const bowlingFrames1 = document.querySelector('.bowlingFrames');
let totalScore = 0;

function score(e) {
  console.log(`this: ${this}`)
}
console.log(bowlingFrames1)
// bowlingFrames1.addEventListener("keydown", score.bind(this))
