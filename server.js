const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
 
app.use(express.static(path.join(__dirname, 'reactjs/build')));
 
// Sample MessageService Get API 
// Implement a POST/GET API 
app.get('/messageservice', (req, res) => {
  res.json("Message from Node JS API: " + new Date().getTime());
});
 
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname+'/reactjs/build/index.html'));
});
 
app.listen(port);
 
console.log('MessageSerivce Running on ' + port);