let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let resetEl = document.getElementById("reset-btn")

let guestScore = 0
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function reset() {
   let resetStr = homeScore + guestScore
   resetEl.textContent += resetStr

   homeScoreEl.textContent = 0
   guestScoreEl.textContent = 0
}
