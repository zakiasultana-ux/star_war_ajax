// import code 

// import { characters } from './module/characters-data.js';
// import { loadCharacters } from './module/character-loader.js';

// window.addEventListener('load', function() {
//   loadCharacters(characters);
// });

// Main entry point - imports and initializes the application
import { loadCharacters } from './module/character-loader.js';

// I'm initializing the character loader when the module loads
loadCharacters();