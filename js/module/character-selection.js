

import { fetchFilm } from './api.js';

const moviePosterMap = {
  1: 'images/1.jpeg',
  2: 'images/star-wars-logo-png.png',
  3: 'images/star-wars-logo-png.png',
  4: 'images/4.jpg',
  5: 'images/5.jpg',
  6: 'images/6.jpg'
};

function getMoviePoster(episodeId) {
  // I'm mapping episode numbers to local poster images
  return moviePosterMap[episodeId] || 'images/star-wars-logo-png.png';
}

function closeLightbox() {
  // I'm closing the movie details lightbox
  const lightboxOverlay = document.querySelector('#lightboxOverlay');
  lightboxOverlay.style.display = 'none';
}

function showLoadingInLightbox() {
  // I'm displaying a loading indicator while fetching movie data
  const lightboxOverlay = document.querySelector('#lightboxOverlay');
  const lightboxContent = document.querySelector('#lightboxContent');
  
  lightboxContent.innerHTML = `
    <button class="lightbox-close" id="lightboxClose">&times;</button>
    <div class="loading-container" style="display: flex; min-height: 300px;">
      <div class="loader"></div>
      <p class="loading-text">Loading movie details...</p>
    </div>
  `;
  
  const closeButton = lightboxContent.querySelector('#lightboxClose');
  closeButton.addEventListener('click', closeLightbox);
  
  lightboxOverlay.style.display = 'flex';
}

function displayMovieDetails(movieData) {
  // I'm populating the lightbox with movie information
  const lightboxContent = document.querySelector('#lightboxContent');
  const posterUrl = getMoviePoster(movieData.episode_id);
  
  lightboxContent.innerHTML = `
    <button class="lightbox-close" id="lightboxClose">&times;</button>
    <button class="back-button" id="backButton" style="
      position: absolute;
      top: 15px;
      left: 15px;
      background: rgba(255, 232, 31, 0.2);
      border: 2px solid #FFE81F;
      color: #FFE81F;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      z-index: 11;
    ">&larr; Back to Films</button>
    <div class="movie-details">
      <div class="movie-poster-container">
        <img src="${posterUrl}" alt="${movieData.title}" class="movie-poster">
      </div>
      <div class="movie-info">
        <h2 class="movie-title">${movieData.title}</h2>
        <p class="movie-episode">Episode ${movieData.episode_id}</p>
        <div class="movie-meta">
          <p><strong>Director:</strong> ${movieData.director}</p>
          <p><strong>Producer:</strong> ${movieData.producer}</p>
          <p><strong>Release Date:</strong> ${movieData.release_date}</p>
        </div>
        <div class="opening-crawl-container">
          <h3>Opening Crawl</h3>
          <p class="opening-crawl">${movieData.opening_crawl}</p>
        </div>
      </div>
    </div>
  `;
  
  const closeButton = lightboxContent.querySelector('#lightboxClose');
  closeButton.addEventListener('click', closeLightbox);
  
  const backButton = lightboxContent.querySelector('#backButton');
  if (backButton && backButton.dataset.character) {
    const character = JSON.parse(backButton.dataset.character);
    function handleBackClick() {
      displayAllFilms(character);
    }
    backButton.addEventListener('click', handleBackClick);
  }
}

function displayAllFilms(character) {
  // I'm showing all films for this character
  const lightboxContent = document.querySelector('#lightboxContent');
  
  lightboxContent.innerHTML = `
    <button class="lightbox-close" id="lightboxClose">&times;</button>
    <div class="movie-details" style="padding: 40px 30px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="${character.image}" alt="${character.name}" style="
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #FFE81F;
          margin-bottom: 20px;
        ">
        <h2 class="movie-title" style="margin-bottom: 10px;">${character.name}</h2>
        <p style="color: #FFE81F; font-size: 1.1rem;">Appears in ${character.films.length} film(s)</p>
        <p style="color: rgba(255, 255, 255, 0.7); margin-top: 10px;">Click any film to view details</p>
      </div>
      <div class="films-list" style="
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin-top: 20px;
      ">
        ${character.films.map(function(filmUrl, index) {
          return `<button class="film-button" data-film-url="${filmUrl}" data-character='${JSON.stringify(character)}' style="
            background: linear-gradient(135deg, rgba(255, 232, 31, 0.1) 0%, rgba(30, 58, 138, 0.2) 100%);
            border: 2px solid #FFE81F;
            padding: 20px;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            text-align: left;
            position: relative;
            overflow: hidden;
          " onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='#FFF'; this.style.boxShadow='0 10px 30px rgba(255, 232, 31, 0.3)';" 
             onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#FFE81F'; this.style.boxShadow='none';">
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="
                width: 50px;
                height: 50px;
                background: rgba(255, 232, 31, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                font-weight: bold;
                color: #FFE81F;
              ">${index + 1}</div>
              <div>
                <div style="font-size: 1.1rem; font-weight: bold; margin-bottom: 5px;">Film ${index + 1}</div>
                <div style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.7);">Click to view details</div>
              </div>
            </div>
            <div style="
              position: absolute;
              right: 15px;
              top: 50%;
              transform: translateY(-50%);
              font-size: 1.5rem;
              color: #FFE81F;
            ">&rarr;</div>
          </button>`;
        }).join('')}
      </div>
    </div>
  `;
  
  const closeButton = lightboxContent.querySelector('#lightboxClose');
  closeButton.addEventListener('click', closeLightbox);
  
  const filmButtons = lightboxContent.querySelectorAll('.film-button');
  filmButtons.forEach(function(button) {
    function handleFilmClick() {
      const filmUrl = button.dataset.filmUrl;
      const character = JSON.parse(button.dataset.character);
      const correctedUrl = filmUrl.replace('/files/', '/films/');
      
      showLoadingInLightbox();
      fetchFilm(correctedUrl)
        .then(function(movieData) {
          displayMovieDetails(movieData);
          
          const backButton = document.querySelector('#backButton');
          if (backButton) {
            backButton.dataset.character = JSON.stringify(character);
            function handleBackClick() {
              displayAllFilms(character);
            }
            backButton.addEventListener('click', handleBackClick);
          }
        })
        .catch(handleMovieError);
    }
    
    button.addEventListener('click', handleFilmClick);
  });
}

function handleMovieError() {
  // I'm showing an error message if the movie fetch fails
  const lightboxContent = document.querySelector('#lightboxContent');
  
  lightboxContent.innerHTML = `
    <button class="lightbox-close" id="lightboxClose">&times;</button>
    <div class="error-container" style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      padding: 40px;
    ">
      <div style="font-size: 4rem; margin-bottom: 20px;">⚠️</div>
      <p class="error-text" style="
        color: #ff6b6b;
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 10px;
      ">Failed to load movie details</p>
      <p style="color: rgba(255, 255, 255, 0.6); text-align: center;">Please try again or select a different film</p>
    </div>
  `;
  
  const closeButton = lightboxContent.querySelector('#lightboxClose');
  closeButton.addEventListener('click', closeLightbox);
}

function removeSelectedClass(card) {
  // I'm removing the selected class from all cards
  card.classList.remove('selected');
}

export function handleCharacterSelection(character) {
  // I'm handling the character click and showing all their films
  const allCharacterCards = document.querySelectorAll('.character-card');
  
  allCharacterCards.forEach(removeSelectedClass);
  
  const selectedCard = document.querySelector(`[data-character-id="${character.id}"]`);
  
  if (selectedCard) {
    selectedCard.classList.add('selected');
  }
  
  if (character.films && character.films.length > 0) {
    const lightboxOverlay = document.querySelector('#lightboxOverlay');
    lightboxOverlay.style.display = 'flex';
    
    displayAllFilms(character);
  }
}