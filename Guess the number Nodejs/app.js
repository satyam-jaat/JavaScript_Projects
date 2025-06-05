const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/guess', (req, res) => {
  const userGuess = parseInt(req.body.number);
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const result = userGuess === randomNumber ? "Correct!" : `Wrong! The number was ${randomNumber}`;
  res.render('result', { result, userGuess });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
