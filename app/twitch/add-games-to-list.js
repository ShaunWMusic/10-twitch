import createGameElement from './create-game-element';

export default function showGamesInList(parentEl, data) {
  parentEl.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const gameItem = data[i].game;
    const el = createGameElement(gameItem);
    parentEl.appendChild(el);
  }
}
// create a game element from each item in the array of data
// add the game element to the end of the parentEl
