import "./style.scss"
import * as scoresFile from './bowlingScoresFile'

const bowlingFrames1 = document.querySelector('.bowlingFrames');
const largeFrames = document.querySelectorAll('.bowlingFrame--large');
const bowlers = document.querySelectorAll('.bowlers');
const scores = scoresFile.CharliesBowlingFrames;

scores.forEach((score, idx, arr) => {
  console.log(`score: ${score}`)
  let frameNmbr = idx + 1;
  let frameName = ".frame"+String(frameNmbr)  /* frameNames will be .frame1, .frame2, etc. */

  score.forEach((smallFrame, sfIdx, sfarr) => {
/* clsList will be ".frame1.bowlingFrame--small", then ".frame2.bowlingFrame--small" */
    let clsList = frameName + ".bowlingFrame--small";  
    let currentFrame = document.querySelectorAll(clsList);
    currentFrame[sfIdx].textContent = smallFrame
    
    console.log(`smallFrame = ${smallFrame}`)
    console.log(`currentFrame[sfIdx].textContent: ${currentFrame[sfIdx].textContent}`)
  })
}) 