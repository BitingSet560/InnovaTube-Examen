const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true }, 
  title: { type: String, required: true }, 
  description: { type: String },
  url: { type: String, required: true }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isFavorite: { type: Boolean, default: false }
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
