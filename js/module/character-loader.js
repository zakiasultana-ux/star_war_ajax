import { createCharacterCard } from './character-card.js';
import { handleCharacterSelection } from './character-selection.js';

export function loadCharacters(characters) {
  const loadingContainer = document.getElementById('loadingContainer');
  const charactersGrid = document.getElementById('charactersGrid');
  
  loadingContainer.style.display = 'flex';
  charactersGrid.style.display = 'none';
  
  setTimeout(function() {
    charactersGrid.innerHTML = '';
    
    characters.forEach(function(character) {
      const characterCard = createCharacterCard(character, handleCharacterSelection);
      charactersGrid.appendChild(characterCard);
    });
    
    loadingContainer.style.display = 'none';
    charactersGrid.style.display = 'grid';
  }, 1000);
}