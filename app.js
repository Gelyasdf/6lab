// Пример GET запроса
fetch('http://localhost:3000/feedbacks')
  .then(response => response.json())
  .then(data => {
    console.log('Ответ сервера:', data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });

// Пример POST запроса
const newFeedback = {
  text: 'Новый отзыв'
};

fetch('http://localhost:3000/feedbacks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newFeedback)
})
.then(response => response.json())
.then(data => {
  console.log('Ответ сервера после добавления нового отзыва:', data);
})
.catch(error => {
  console.error('Ошибка:', error);
});