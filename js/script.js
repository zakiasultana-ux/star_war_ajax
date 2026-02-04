// import code 

import { characters } from './module/characters-data.js';
import { loadCharacters } from './module/character-loader.js';

window.addEventListener('load', function() {
  loadCharacters(characters);
});