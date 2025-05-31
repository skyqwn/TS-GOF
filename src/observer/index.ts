import EvneBettingPlayer from "./EvenBettingPlayer";
import FairDiceGame from "./FairDiceGame";
import NBettingPlayer from "./NBettingPlayer";
import OddBettingPlayer from "./OddBettingPlayer";

const diceGame = new FairDiceGame();

const players = [
  new OddBettingPlayer("홀쭉이"),
  new EvneBettingPlayer("짝눈이"),
  new NBettingPlayer("점쟁이", [2, 3, 5]),
];

players.forEach((players) => diceGame.addPlayer(players));

function updateBoard() {
  const domPlayers = document.querySelector(".players");
  domPlayers.innerHTML = "";

  players.forEach((players) => {
    const domPlayer = document.createElement("div");
    domPlayer.innerText = players.name;

    if (players.winnig) domPlayer.classList.add("win");

    domPlayers.append(domPlayer);
  });
}

updateBoard();

document.querySelector("button").addEventListener("click", () => {
  const diceNumber = diceGame.play();

  const domDice = document.querySelector(".dice") as HTMLElement;
  domDice.innerText = diceNumber.toString();

  updateBoard();
});
