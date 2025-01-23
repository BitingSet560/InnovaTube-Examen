// src/controllers/youtube.controller.js
const youtubeService = require('../apiservice/videos.apiservice');

const searchVideos = async (req, res, next) => {
  try {
    const { query, maxResults } = req.query; // Término de búsqueda y límite opcional
    if (!query) {
      return res.status(400).json({ error: 'Debe proporcionar un término de búsqueda' });
    }

    const videos = await youtubeService.searchVideos(query, maxResults || 10);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

module.exports = { searchVideos };
