const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Welcome to the API!');
});
app.listen(4000, console.log('listeningon port 4000'));
