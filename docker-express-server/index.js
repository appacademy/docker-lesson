const express = require('express');
const path = require('path');
const app = express();

const port = process.env.port || 8000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
