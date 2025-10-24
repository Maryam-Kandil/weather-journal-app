// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express =require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors =require('cors');
app.use(Cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port =3300;
app.listen(port,function(){
 console.log('server is running at port'+ port);
});
/* post route take temp date feelings
 from postData method */
app.post('/postData',function(request,response){
    projectData= request.body;
    response.send(projectData);
    response.end();
});
/* get route send temp date feelings
 from getAlltData method */
 app.get('/getAllData',function(request,response){
   response.json(projectData);
   response.end();
 });