var express = require('express');
var cors = require('cors');

var app = express();

var corsOptions = {
  origin: 'http://localhost',
}

app.set('view engine', 'ejs');
app.use(express.static('./'));
app.use(cors(corsOptions));

app.listen(80, () => {
	console.log('listening on port 80');
})
