import "./style.scss"
import * as scoresFile from './bowlingScoresFile'

// const bowlingFrames1 = document.querySelector('.bowlingFrames');
const largeFrames = document.querySelectorAll('.bowlingFrame--large');
const bowlerName = document.querySelectorAll('.bowlerName');
const scores = scoresFile.BriansBowlingFrames;

const bowler = scores[0];
const frames = scores[1];
const frameScores = scores[2];

console.log(`bowler: ${bowler}`)
console.log(`frames: ${frames}`)
console.log(`frameScores: ${frameScores}`)

bowlerName[0].textContent = bowler;
frames.forEach((frame, idx, arr) => {
  // console.log(`frame: ${frame}`)
  let frameNmbr = idx + 1;
  let frameName = ".frame"+String(frameNmbr)  /* frameNames will be .frame1, .frame2, etc. */
  largeFrames[idx].textContent = frameScores[idx];

  frame.forEach((smallFrame, sfIdx, sfarr) => {
/* clsList will be ".frame1.bowlingFrame--small", then ".frame2.bowlingFrame--small" */
    let clsList = frameName + ".bowlingFrame--small";  
    let currentFrame = document.querySelectorAll(clsList);
    currentFrame[sfIdx].textContent = smallFrame
    
    // console.log(`smallFrame = ${smallFrame}`)
    // console.log(`currentFrame[sfIdx].textContent: ${currentFrame[sfIdx].textContent}`)
  })
}) 