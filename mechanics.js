let cash = 0
let moveLeft = 65
let moveUp = 87
let moveRight = 68
let moveDown = 83
function changeMovement() {
    if (document.getElementById("one").innerText === "WASD") {
        moveLeft = 37
        moveUp = 38
        moveRight = 39
        moveDown = 40
        document.getElementById("one").innerText = "Arrow Keys"
    }
    else if (document.getElementById("one").innerText === "Arrow Keys") {
        moveLeft = 65
        moveUp = 87
        moveRight = 68
        moveDown = 83
        document.getElementById("one").innerText = "WASD"
    }
}
function changeMusic() {
    if (document.getElementById("two").innerText === "ON") {
        document.getElementById("two").innerText = "OFF"
    }
    else if (document.getElementById("two").innerText === "OFF") {
        document.getElementById("two").innerText = "ON"
    }
}
function changeSounds() {
    if (document.getElementById("three").innerText === "ON") {
        document.getElementById("three").innerText = "OFF"
    }
    else if (document.getElementById("three").innerText === "OFF") {
        document.getElementById("three").innerText = "ON"
    }
}