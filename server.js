const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
 
app.use(express.static(path.join(__dirname, 'reactjs/build')));
 
// Sample seafalll Get API 
// Implement a POST/GET API 
app.get('/seafall', (req, res) => {
  res.json("Message from Node JS API: " + new Date().getTime());
});
 
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname+'/reactjs/build/index.html'));
});
 
app.listen(port);
 
console.log('Seafall Running on ' + port);