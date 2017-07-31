'use strict';
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));
app.get('/', function(request, response) {response.sendFile('index.html', {root:'./public'});
});
app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
});
