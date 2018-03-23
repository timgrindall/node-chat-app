const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

// binds port to app
app.listen(port, () => {
	console.log(`Server is up on port ${port}.`);
});