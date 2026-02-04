export function createCharacterCard(character, onSelectCallback) {
  const characterCardTemplate = document.getElementById('characterCardTemplate');
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
  
  characterCard.addEventListener('click', function() {
    onSelectCallback(character);
  });
  
  return templateClone;
}