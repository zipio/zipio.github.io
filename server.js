var express = require('express'), app = express();

app.use(express.static('.'));

app.listen(8080, function() { console.log('Dev server started on http://localhost:8080/'); });