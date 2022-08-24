/*
 Right now each line of Bowling is an array consisting of --
 1) Bowler name
 2) an array of arrays. These are the 2 small frames within frames 1-9 and 3 small frames in frame 10.
 3) an array of frame scores.  These are the 10 individual scores for the 10 individual frames. 
*/

// export const AngelasBowlingFrames = [[8, 1], [9, "/"], [9, "/"], ["x"], [4, 5], [1, "/"], ["x"], ["x"], [3, "/"], [4, "/", 8]]
// export const CharliesBowlingFrames = [["x"], ["x"], ["x"], ["x"], ["x"], ["x"], ["x"], ["x"], ["x"], ["x", 9, "/"]]
export const allBowlingFrames = [
  ["Andy Anderson", [[8, 1], [9, "/"], [9, "/"], ["x", ""], [4, 5], [1, "/"], ["x", ""], ["x", ""], [3, "/"], [4, "/", 8]], [9, 28, 48, 67, 76, 96, 119, 139, 153, 173]],
  ["Brian Buhrman", [[5, "/"], ["X", ""], [9, "-"], ["x", ""], ["x", ""], ["x", "🦃"], [9, "/"], [8, "/"], [6, 2], ["x", 8, "/"]], [20, 39, 48, 78, 107, 127, 145, 161, 169, 189]],
  ["Charlie Chalk", [["X", ""], ["X", ""], ["X", "🦃"], ["x", "🦃"], ["x", "🦃"], ["x", "🦃"], ["x", "🦃"], ["x", "🦃"], ["x", "🦃"], ["x", 9, "/"]], [30, 60, 90, 120, 150, 180, 210, 240, 269, 289]]
]