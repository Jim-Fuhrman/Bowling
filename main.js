import "./style.scss"
import * as scoresFile from './bowlingScoresFile'

const bowlingTeam = document.querySelector('.bowlers');
const largeFrames = document.querySelectorAll('.bowlingFrame--large');
const bowlerName = document.querySelectorAll('.bowlerName');
const bowlers = scoresFile.allBowlingFrames;

bowlers.forEach((bowler, bIdx, bArr) => {
  let personName = bowler[0];
  let frames = bowler[1];
  let frameScores = bowler[2];

  /*
  console.log(`personName: ${personName}`)
  console.log(`frames: ${frames}`)
  console.log(`frameScores: ${frameScores}`)
  console.log(' ')
  console.log(`frames[1][0]: ${frames[1][0]}`)
  */

  let newBowler = document.createElement("div");
  bowlingTeam.appendChild(newBowler);
  newBowler.classList.add('bowler');
  newBowler.innerHTML = `
  <div class="bowlerName">${personName}</div>
    <div class="bowlingFramesRow--small">
      <div class="frame1 bowlingFrame--small">${frames[0][0]}</div>
      <div class="frame1 bowlingFrame--small">${frames[0][1]}</div>
      <div class="frame2 bowlingFrame--small">${frames[1][0]}</div>
      <div class="frame2 bowlingFrame--small">${frames[1][1]}</div>
      <div class="frame3 bowlingFrame--small">${frames[2][0]}</div>
      <div class="frame3 bowlingFrame--small">${frames[2][1]}</div>
      <div class="frame4 bowlingFrame--small">${frames[3][0]}</div>
      <div class="frame4 bowlingFrame--small">${frames[3][1]}</div>
      <div class="frame5 bowlingFrame--small">${frames[4][0]}</div>
      <div class="frame5 bowlingFrame--small">${frames[4][1]}</div>
      <div class="frame6 bowlingFrame--small">${frames[5][0]}</div>
      <div class="frame6 bowlingFrame--small">${frames[5][1]}</div>
      <div class="frame7 bowlingFrame--small">${frames[6][0]}</div>
      <div class="frame7 bowlingFrame--small">${frames[6][1]}</div>
      <div class="frame8 bowlingFrame--small">${frames[7][0]}</div>
      <div class="frame8 bowlingFrame--small">${frames[7][1]}</div>
      <div class="frame9 bowlingFrame--small">${frames[8][0]}</div>
      <div class="frame9 bowlingFrame--small">${frames[8][1]}</div>
      <div class="frame10 bowlingFrame--small">${frames[9][0]}</div>
      <div class="frame10 bowlingFrame--small">${frames[9][1]}</div>
      <div class="frame10 bowlingFrame--small">${frames[9][2]}</div>
    </div>
    <div class="bowlingFramesRow--large">
      <div class="frame1 bowlingFrame--large">${frameScores[0]}</div>
      <div class="frame2 bowlingFrame--large">${frameScores[1]}</div>
      <div class="frame3 bowlingFrame--large">${frameScores[2]}</div>
      <div class="frame4 bowlingFrame--large">${frameScores[3]}</div>
      <div class="frame5 bowlingFrame--large">${frameScores[4]}</div>
      <div class="frame6 bowlingFrame--large">${frameScores[5]}</div>
      <div class="frame7 bowlingFrame--large">${frameScores[6]}</div>
      <div class="frame8 bowlingFrame--large">${frameScores[7]}</div>
      <div class="frame9 bowlingFrame--large">${frameScores[8]}</div>
      <div class="frame10 bowlingFrame--large">${frameScores[9]}</div>
    </div>
  `
})