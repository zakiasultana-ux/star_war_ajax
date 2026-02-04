export function handleCharacterSelection(character) {
  const allCharacterCards = document.querySelectorAll('.character-card');
  
  allCharacterCards.forEach(function(card) {
    card.classList.remove('selected');
  });
  
  const selectedCard = document.querySelector(`[data-character-id="${character.id}"]`);
  
  if (selectedCard) {
    selectedCard.classList.add('selected');
  }
  
  console.log('Character selected:', character);
}