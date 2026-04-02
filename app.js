const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD Demo App is running!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Avoid starting the server when required by test files
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;