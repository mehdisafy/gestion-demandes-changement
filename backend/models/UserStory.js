// backend/models/userStory.js
const mongoose = require('mongoose');

// Define the User Story schema
const userStorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['Haute', 'Moyenne', 'Basse'], // Only these values are allowed
    required: true,
  },
  status: {
    type: String,
    enum: ['En attente', 'En cours', 'Terminé'], // Only these values are allowed
    default: 'En attente',
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create the UserStory model
const UserStory = mongoose.model('UserStory', userStorySchema);

module.exports = UserStory;