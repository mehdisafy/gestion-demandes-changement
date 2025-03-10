// frontend/script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userStoryForm');
  const tableBody = document.querySelector('#userStoriesTable tbody');

  // Load user stories from the backend
  const loadUserStories = async () => {
    try {
      const response = await fetch('http://localhost:3000/user-stories'); // Ensure the URL is correct
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userStories = await response.json();

      // Clear the table
      tableBody.innerHTML = '';

      // Populate the table
      userStories.forEach((story) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${story.title}</td>
          <td>${story.description}</td>
          <td>${story.priority}</td>
          <td>${story.status}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Erreur lors du chargement des user stories:', error);
    }
  };

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;

    const userStory = { title, description, priority, status: 'En attente' };

    try {
      // Send data to the backend
      const response = await fetch('http://localhost:3000/user-stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userStory),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newUserStory = await response.json();
      console.log('User story created:', newUserStory);

      // Clear the form
      form.reset();

      // Refresh the table
      loadUserStories();
    } catch (error) {
      console.error('Erreur lors de la soumission de la user story:', error);
    }
  });

  // Initial load
  loadUserStories();
});