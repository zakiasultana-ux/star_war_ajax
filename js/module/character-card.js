export function createCharacterCard(character, onSelectCallback) {
  // I'm creating a character card from the template
  const characterCardTemplate = document.querySelector('#characterCardTemplate');
  const templateClone = characterCardTemplate.content.cloneNode(true);
  
  const characterCard = templateClone.querySelector('.character-card');
  const characterImage = templateClone.querySelector('.character-image');
  const characterName = templateClone.querySelector('.character-name');
  const characterGender = templateClone.querySelector('.character-gender');
  
  characterImage.src = character.image;
  characterImage.alt = character.name;
  characterName.textContent = character.name;
  characterGender.textContent = character.gender;
  
  characterCard.dataset.characterId = character.id;
  
  function handleCardClick() {
    // I'm triggering the selection callback when the card is clicked
    onSelectCallback(character);
  }
  
  characterCard.addEventListener('click', handleCardClick);
  
  return templateClone;
}