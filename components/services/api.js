const API_KEY = '8c5433428a1a90d6f320f53811e465b6';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export const fetchMovies = async (type) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch movies');
  }
};

export const fetchTVShows = async (type) => {
  try {
    const response = await fetch(`${BASE_URL}/tv/${type}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    throw new Error('Failed to fetch TV shows');
  }
};

export const searchMedia = async (query, type) => {
  try {
    const response = await fetch(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching media:', error);
    throw new Error('Failed to search media');
  }
};

export const fetchMediaDetails = async (id, type) => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching media details:', error);
    throw new Error('Failed to fetch media details');
  }
};

export const getImageUrl = (path) => {
  return `${IMAGE_BASE_URL}${path}`;
};
