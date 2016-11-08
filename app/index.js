import 'whatwg-fetch';
import data from './data.json';

import addGamesToList from './twitch/add-games-to-list';
// import createGameElement from './twitch/create-game-element';

// Look up a `ul` element with a class called `results`
// Add games to the results list based on the data from `data.json`
const ul = document.querySelector('.results');

addGamesToList(ul, data.top);
>>>>>>> d779e80d161214f673de8f265445fd10390fb13c
