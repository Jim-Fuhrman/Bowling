import * as scoresFile from './bowlingScoresFile.js';

let nmbr, currentFrame, currentFrameScore, totalBowlingScore, passingFrameScore
let stars

function initialize() {
  nmbr = -1,
  currentFrame = currentFrameScore = totalBowlingScore = passingFrameScore = 0
}

function bowlingScore(bowlingFrames) {
  nmbr++
  if (nmbr === bowlingFrames.length - 1) {
    totalBowlingScore += checkTenthFrame(bowlingFrames[bowlingFrames.length - 1])
    switch (totalBowlingScore) {
      case 300:
        stars = `⭐⭐⭐ Perfect Game ⭐⭐⭐`
        break
      default:
        stars = `😊`
    }
    console.log(`Total Bowling Score: ${totalBowlingScore} ${stars}`)
    return totalBowlingScore
  }

  let currentFrame = bowlingFrames[nmbr]
  let openFrame = currentFrame.length === 2 && Number.isInteger(currentFrame[0]) && Number.isInteger(currentFrame[1])
  let spare = currentFrame.length === 2 && currentFrame[1] === "/"
  let strike = currentFrame.length === 1 && currentFrame[0] === "x"

  if (openFrame) {
    currentFrameScore = currentFrame[0] + currentFrame[1]
    console.log(`frame #${nmbr + 1}: ${currentFrame}  Score = ${currentFrameScore}`)
  }

  if (spare || strike) {
    passingFrameScore = 10
    currentFrameScore = checkNextFrame(currentFrame, passingFrameScore, bowlingFrames, nmbr, true)
    console.log(`frame #${nmbr + 1}: ${bowlingFrames[nmbr]}  Score = ${currentFrameScore}`)
  }

  totalBowlingScore += currentFrameScore
  // console.log(`totalBowlingScore: ${totalBowlingScore}`)
  return totalBowlingScore + bowlingScore(bowlingFrames)
}

function checkNextFrame(currentFrame, passingFrameScore, bowlingFrames, nmbr, keepLooking = true) {
  if (keepLooking === false || passingFrameScore > 20) return passingFrameScore

  let nextFrameSub

  nextFrameSub = nmbr + 1 > bowlingFrames.length - 1 ? bowlingFrames.length - 1 : nmbr + 1

  let current_Frame_Was_Spare = currentFrame[1] === "/"
  let nextFrame = bowlingFrames[nextFrameSub]
  let next_Frame_Is_Last_Frame = nextFrameSub === bowlingFrames.length - 1
  let last_Frame_Second_Element_Is_Integer = next_Frame_Is_Last_Frame && Number.isFinite(nextFrame[1])
  let last_Frame_Second_Element_Is_Strike = next_Frame_Is_Last_Frame && nextFrame[1] === "x"
  let currentFrameAndNextFrameBothStrikes = currentFrame[0] === "x" && nextFrame[0] === "x"
  let previous_Two_Frames_Were_Strikes = passingFrameScore === 20

  if (current_Frame_Was_Spare) {
    if (nextFrame[0] === "x") return checkNextFrame(currentFrame, 10 + passingFrameScore, bowlingFrames, nmbr, false)
    else return checkNextFrame(currentFrame, nextFrame[0] + passingFrameScore, bowlingFrames, nmbr, false)
  }

  if (currentFrameAndNextFrameBothStrikes && next_Frame_Is_Last_Frame) if (previous_Two_Frames_Were_Strikes) return 30
  if (last_Frame_Second_Element_Is_Integer) return 20 + nextFrame[1]
  if (last_Frame_Second_Element_Is_Strike) return 30

  if (currentFrameAndNextFrameBothStrikes) return checkNextFrame(nextFrame, 10 + passingFrameScore, bowlingFrames, nextFrameSub, true)

  if (previous_Two_Frames_Were_Strikes) return checkNextFrame(currentFrame, passingFrameScore + nextFrame[0], bowlingFrames, nmbr, false)

  if (Number.isFinite(nextFrame[0]) && Number.isFinite(nextFrame[1])) return checkNextFrame(currentFrame, passingFrameScore + nextFrame[0] + nextFrame[1], bowlingFrames, nmbr, false)
  else if (Number.isFinite(nextFrame[0]) && nextFrame[1] === "/") return checkNextFrame(currentFrame, passingFrameScore + 10, bowlingFrames, nmbr, false)
}

function checkTenthFrame(lastFrame) {
  let openFrame = lastFrame.length === 2 && Number.isInteger(lastFrame[0]) && Number.isInteger(lastFrame[1])
  let spare = lastFrame.length === 3 && lastFrame[1] === "/" && Number.isFinite(lastFrame[2])
  let strikeSpare = lastFrame.length === 3 && lastFrame[0] === "x" && lastFrame[2] === "/"
  let spareStrike = lastFrame.length === 3 && lastFrame[1] === "/" && lastFrame[2] === "x"
  let perfectFrame = lastFrame.length === 3 && lastFrame[0] === "x" && lastFrame[1] === "x" && lastFrame[2] === "x"
  let nearPerfectFrame = lastFrame.length === 3 && lastFrame[0] === "x" && lastFrame[1] === "x" && Number.isInteger(lastFrame[2])
  if (openFrame) {
    console.log(`frame #10: ${lastFrame} Score: ${lastFrame[0] + lastFrame[1]}`)
    return lastFrame[0] + lastFrame[1]
  }
  if (spare) {
    console.log(`frame #10: ${lastFrame} Score: ${10 + lastFrame[2]}`)
    return 10 + lastFrame[2]
  }
  if (spareStrike || strikeSpare) {
    console.log(`frame #10: ${lastFrame} Score: 20`)
    return 20
  }
  if (nearPerfectFrame) {
    console.log(`frame #10: ${lastFrame} Score: ${20 + lastFrame[2]}`)
    return 20 + lastFrame[2]
  }
  if (perfectFrame) {
    console.log(`frame #10: ${lastFrame} Score: 30`)
    return 30
  }
}

initialize()
bowlingScore(scoresFile.AngelasBowlingFrames)
console.log(' ')
initialize()
bowlingScore(scoresFile.BriansBowlingFrames)
