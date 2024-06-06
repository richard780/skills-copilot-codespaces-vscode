// Create web server
// Create a GET route that returns all comments
const express = require('express');
const app = express();
// Create a GET route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Create a POST route that adds a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).send(newComment);
});

// Create a DELETE route that deletes a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments = comments.filter(comment => comment.id !== id);
  res.status(200).send();
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});