const express = require('express');
const { join } = require('path');
const app = express();
const path = require('path');

// settings
app.set('puerto', 3000); // puerto
app.set('views', path.join(__dirname, 'views')); // ruta
app.engine('html', require('ejs').renderFile);  // lo renderiza a "ejs"
app.set('view engine', 'ejs');  // uso de plantilla

// middlewares 

// routes
app.use(require('./routes/index'));

// static files 
app.use(express.static(path.join(__dirname, 'public')));

// listen the server
app.listen(app.get('puerto'), () =>{
    console.log('server on en el puerto', '3000');
});