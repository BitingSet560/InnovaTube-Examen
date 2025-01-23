const axios = require('axios');

const API_BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.YOUTUBE_API_KEY;

const searchVideos = async (query, maxResults = 10) => {
  const url = `${API_BASE_URL}/search?part=snippet&type=video&maxResults=${maxResults}&q=${encodeURIComponent(
    query
  )}&key=${API_KEY}`;

  const response = await axios.get(url);

  // Mapear los datos para simplificar el uso en la aplicación
  const videos = response.data.items.map((item) => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.default.url,
    channelTitle: item.snippet.channelTitle,
  }));

  return videos;
};

module.exports = { searchVideos };
