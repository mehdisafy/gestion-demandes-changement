// // backend/routes/userStories.js
// const express = require('express');
// const router = express.Router();
// const UserStory = require('../models/UserStory'); // Import the UserStory model

// // Create a new user story
// router.post('/', async (req, res) => {
//   try {
//     const newUserStory = new UserStory(req.body);
//     await newUserStory.save();
//     res.status(201).send(newUserStory);
//   } catch (error) {
//     res.status(400).send({ error: 'Erreur lors de la création de la user story' });
//   }
// });

// // Get all user stories
// router.get('/', async (req, res) => {
//   try {
//     const userStories = await UserStory.find();
//     res.send(userStories);
//   } catch (error) {
//     res.status(500).send({ error: 'Erreur lors de la récupération des user stories' });
//   }
// });

// // Update a user story by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedUserStory = await UserStory.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true } // Return the updated document
//     );
//     if (!updatedUserStory) {
//       return res.status(404).send({ error: 'User story non trouvée' });
//     }
//     res.send(updatedUserStory);
//   } catch (error) {
//     res.status(400).send({ error: 'Erreur lors de la mise à jour de la user story' });
//   }
// });

// // Delete a user story by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedUserStory = await UserStory.findByIdAndDelete(req.params.id);
//     if (!deletedUserStory) {
//       return res.status(404).send({ error: 'User story non trouvée' });
//     }
//     res.send({ message: 'User story supprimée avec succès' });
//   } catch (error) {
//     res.status(400).send({ error: 'Erreur lors de la suppression de la user story' });
//   }
// });

// module.exports = router;
// backend/routes/userStories.js
const express = require('express');
const router = express.Router();
const UserStory = require('../models/userStory');

// Create a new user story
router.post('/', async (req, res) => {
  try {
    const newUserStory = new UserStory(req.body);
    await newUserStory.save();
    res.status(201).send(newUserStory);
  } catch (error) {
    res.status(400).send({ error: 'Erreur lors de la création de la user story' });
  }
});

// Get all user stories
router.get('/', async (req, res) => {
  try {
    const userStories = await UserStory.find();
    res.send(userStories);
  } catch (error) {
    res.status(500).send({ error: 'Erreur lors de la récupération des user stories' });
  }
});

// Update a user story by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUserStory = await UserStory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUserStory) {
      return res.status(404).send({ error: 'User story non trouvée' });
    }
    res.send(updatedUserStory);
  } catch (error) {
    res.status(400).send({ error: 'Erreur lors de la mise à jour de la user story' });
  }
});

// Delete a user story by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUserStory = await UserStory.findByIdAndDelete(req.params.id);
    if (!deletedUserStory) {
      return res.status(404).send({ error: 'User story non trouvée' });
    }
    res.send({ message: 'User story supprimée avec succès' });
  } catch (error) {
    res.status(400).send({ error: 'Erreur lors de la suppression de la user story' });
  }
});

module.exports = router;