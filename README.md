Index
<html>
  <head>
    <style>
      body {
        margin: 0;
        border: 0;
        padding: 0;
      }
      #levels {
        width: 10vw;
        height: 5vh;
        position: absolute;
        top: 50vh;
        left: 40vw;
      }
      #training {
        width: 10vw;
        height: 5vh;
        position: absolute;
        top: 50vh;
        right: 40vw;
      }
      #upgrades {
        width: 10vw;
        height: 5vh;
        position: absolute;
        top: 55vh;
        left: 40vw;
      }
      #settings {
        width: 10vw;
        height: 5vh;
        position: absolute;
        top: 55vh;
        right: 40vw;
      }
      #gameTitle {
        font-size: 5vh;
        position: absolute;
        top: 35vh;
        text-align: center;
        margin: auto;
        width: 100%;
      }
    </style>
    <script>
      function toLevels() {
        location.href = "start.html"
      }
      function toPractice() {
        location.href = "practice.html"
      }
      function toUpgrades() {
        location.href = "upgrades.html"
      }
      function toSettings() {
        location.href = "settings.html"
      }
    </script>
  </head>
  <body>
    <p id="gameTitle">Untitled Video Game Project</p>
    <button onclick="toLevels()" id="levels">Start</button>
    <button onclick="toPractice()" id="training">Training</button>
    <button onclick="toUpgrades()" id="upgrades">Upgrades</button>
    <button onclick="toSettings()" id="settings">Settings</button>
  </body>
</html>

Start
<html>
  <head>
    <style>
      body {
        margin: 0;
        border: 0;
        padding: 0;
      }
    </style>
    <script>
    </script>
  </head>
  <body>
  </body>
</html>

Training
<html>
  <head>
    <style>
      body {
        margin: 0;
        border: 0;
        padding: 0;
      }
    </style>
    <script>
    </script>
  </head>
  <body>
  </body>
</html>

Upgrades
<html>
  <head>
    <style>
      body {
        margin: 0;
        border: 0;
        padding: 0;
      }
      #title {
        font-size: 5vh;
        position: absolute;
        top: 10vh;
        text-align: center;
        margin: auto;
        width: 100%;
      }
    </style>
    <script>
    </script>
  </head>
  <body>
    <p id="title">Upgrades</p>
    <div id="list">
      <p id="armor"></p>
      <p id="armorStats"></p>
      <p id="weapon"></p>
      <p id="weaponStats"></p>
      <p id="move"></p>
      <p id="movespeed"></p>
    </div>
  </body>
</html>

Settings
<html>
  <head>
    <style>
      body {
        margin: 0;
        border: 0;
        padding: 0;
      }
      #header {
        font-size: 5vh;
        position: absolute;
        top: 15vh;
        text-align: center;
        margin: auto;
        width: 100%;
      }
      #options {
        width: 50vw;
        height: 50vh;
        border-style: solid;
        border-width: 1vw;
        position: absolute;
        top: 25vh;
        left: 25vw;
      }
      #four {
        width: 20vw;
        height: 5vh;
        position: absolute;
        bottom: 5vh;
        left: 15vw;
      }
    </style>
    <script src="mechanics.js"></script>
    <script>
        function toHome() {
            location.href = "index.html"
        }
    </script>
  </head>
  <body>
    <p id="header">Settings</p>
    <div id="options">
        <p id="controls">Movement Keys</p>
        <button onclick="changeMovement()" id="one">WASD</button>
        <p id="music">Music</p>
        <button onclick="changeMusic()" id="two">ON</button>
        <p id="sound">Sound Effects</p>
        <button onclick="changeSounds()" id="three">ON</button>
        <button onclick="toHome()" id="four">Back to Homepage</button>
    </div>
  </body>
</html>

Mechanics
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
