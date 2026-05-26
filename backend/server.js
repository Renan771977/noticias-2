import express from 'express';

const app = express();

app.use(express.json());

app.get('/check', async (req, res) => {
  var status = {
    status: "Running..."
  }
  res.json(status);
});

app.post('/check', async (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});