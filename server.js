var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./'))

app.listen(80, () => {
	console.log('listening on port 80');
})