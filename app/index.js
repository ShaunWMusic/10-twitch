import 'whatwg-fetch';
import data from './data.json';

import addGamesToList from './twitch/add-games-to-list';

// Look up a `ul` element with a class called `results`
// Add games to the results list based on the data from `data.json`
const ul = document.querySelector('.results');
