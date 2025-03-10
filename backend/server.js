// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userStoriesRouter = require('./routes/userStories'); // Import the user stories routes

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userStoriesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connecté à MongoDB');
  }).catch((err) => {
    console.error('Erreur de connexion à MongoDB:', err);
  });
// Routes
app.use('/user-stories', userStoriesRouter); // Use the user stories routes

// Default route (optional)
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de gestion des user stories!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Une erreur est survenue sur le serveur.' });
});

// Start the server
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});