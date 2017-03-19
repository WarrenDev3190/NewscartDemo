const express = require('express');


const app = express();

app.get('/v1/', (req, res) => {
  // Index Route
  res.status(200).json({
    message: 'hello',
    data: [],
    error: null,
  });
});

app.listen(8080, (err) => {
  if (!err) {
    console.log('App running on port 8080');
    return;
  }
  console.log(err);
});


module.exports = app;
