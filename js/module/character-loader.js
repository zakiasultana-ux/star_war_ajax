import { createCharacterCard } from './character-card.js';
import { handleCharacterSelection } from './character-selection.js';
import { fetchCharacters } from './api.js';

const characterImageMap = {
  "Luke Skywalker": "images/LukeSkywalker.webp",
  "C-3PO": "images/C-3PO.webp",
  "R2-D2": "images/R2-D2.webp",
  "Darth Vader": "images/Darth_Vader.jpg",
  "Leia Organa": "images/Leia_Organa.jpg",
  "Owen Lars": "images/OwenLars.webp",
  "Beru Whitesun lars": "images/BeruWhitesunLars.webp",
  "R5-D4": "images/R5D4.webp",
  "Biggs Darklighter": "images/Biggs_Darklighter.webp",
  "Obi-Wan Kenobi": "images/Obi-Wan_Kenobi.webp"
};

function getCharacterImage(name) {
  // I'm mapping character names to local image files
  return characterImageMap[name] || "images/star-wars-logo-png.png";
}

function processCharacterData(characterData, index) {
  // I'm formatting the API data for display
  return {
    id: index + 1,
    name: characterData.name,
    gender: characterData.gender,
    image: getCharacterImage(characterData.name),
    films: characterData.films,
    height: characterData.height,
    mass: characterData.mass,
    hair_color: characterData.hair_color,
    eye_color: characterData.eye_color,
    birth_year: characterData.birth_year
  };
}

function appendCharacterCard(character) {
  // I'm adding each character card to the grid
  const charactersGrid = document.querySelector('#charactersGrid');
  const card = createCharacterCard(character, handleCharacterSelection);
  charactersGrid.appendChild(card);
}

function displayCharacters(data) {
  // I'm showing the fetched characters in the grid
  const charactersGrid = document.querySelector('#charactersGrid');
  const loadingContainer = document.querySelector('#loadingContainer');
  
  if (!charactersGrid) {
    throw new Error('Characters grid element not found');
  }
  
  let charactersList;
  if (Array.isArray(data)) {
    charactersList = data;
  } else if (data && data.results) {
    charactersList = data.results;
  } else {
    throw new Error('Invalid API response structure');
  }
  
  charactersGrid.innerHTML = '';
  
  const characters = charactersList.slice(0, 10).map(processCharacterData);
  characters.forEach(appendCharacterCard);
  
  loadingContainer.style.display = 'none';
  charactersGrid.style.display = 'grid';
}

function hideLoadingOnError() {
  // I'm hiding the loading indicator when an error occurs
  const loadingContainer = document.querySelector('#loadingContainer');
  const charactersGrid = document.querySelector('#charactersGrid');
  
  if (loadingContainer) {
    loadingContainer.style.display = 'none';
  }
  if (charactersGrid) {
    charactersGrid.style.display = 'grid';
  }
}

export function loadCharacters() {
  // I'm initiating the character fetch from SWAPI
  const loadingContainer = document.querySelector('#loadingContainer');
  const charactersGrid = document.querySelector('#charactersGrid');
  
  loadingContainer.style.display = 'flex';
  charactersGrid.style.display = 'none';
  
  fetchCharacters()
    .then(displayCharacters)
    .catch(hideLoadingOnError);
}