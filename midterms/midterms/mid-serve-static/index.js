const express = require('express');
const app = express();

///use the middleware required fro swerving stativ files.

app.use(express.static('public'));

//crate the roue to serve a static index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

//setting the listener to rnv port info
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
