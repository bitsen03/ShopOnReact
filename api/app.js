import express from 'express';
import cors from 'cors';
import products from  './products.js'; // Импорт модуля products

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
  
app.get('/', (req, res) => {
  // Отправляем данные клиенту
  res.json(products);
});

app.get('/api/products', (req, res) => {
  // Отправляем данные клиенту
  res.json(products);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
