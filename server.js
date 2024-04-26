const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON данных
app.use(bodyParser.json());

// Примеры данных (можете заменить на свои данные или подключить базу данных)
let feedbacks = [
  { id: 1, text: 'Отличный сервис!' },
  { id: 2, text: 'Мне понравилось!' }
];

// Маршрут для получения всех отзывов
app.get('/feedbacks', (req, res) => {
  res.json(feedbacks);
});

// Маршрут для добавления нового отзыва
app.post('/feedbacks', (req, res) => {
  const newFeedback = req.body;
  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback);
});

// Маршрут для обновления отзыва
app.put('/feedbacks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedFeedback = req.body;
  feedbacks = feedbacks.map(feedback =>
    feedback.id === id ? updatedFeedback : feedback
  );
  res.json(updatedFeedback);
});

// Маршрут для удаления отзыва
app.delete('/feedbacks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  feedbacks = feedbacks.filter(feedback => feedback.id !== id);
  res.status(204).end();
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});