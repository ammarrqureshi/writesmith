const express = require('express');
const app = express();
const cors = require('cors');

const port = 4000;


app.use(cors());
app.post('/signup', (req, res) => {
    res.json('User Info Received');
}
);



app.listen(port);