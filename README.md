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
