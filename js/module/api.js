// API Routes
// Characters: https://swapi.info/api/people/
// Films: https://swapi.info/api/films/{id}

const API_BASE = 'https://swapi.info/api';

function handleResponse(response) {
  // I'm checking if the API response was successful
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

function handleError(error) {
  // I'm displaying error messages to the user
  console.error('API Error:', error);
  const errorElement = document.querySelector('#errorMessage');
  if (errorElement) {
    errorElement.textContent = 'Failed to load data. Please try again later.';
    errorElement.style.display = 'block';
  }
  throw error;
}

export function fetchCharacters() {
  // I'm fetching the first page of characters from SWAPI
  return fetch(`${API_BASE}/people/`)
    .then(handleResponse)
    .catch(handleError);
}

export function fetchFilm(filmUrl) {
  // I'm fetching movie details from the provided URL
  return fetch(filmUrl)
    .then(handleResponse)
    .catch(handleError);
}

