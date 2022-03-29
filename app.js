const express = require('express');
const Router = require('./routes/router.js');
const app = express();

app.set("view engine", "pug");
app.use('/', Router);

app.all('/about/*', (req,res)=>{
  res.sendStatus(404);
});

app.all('*', (req,res)=>{
  res.render('layout', {method:req.method, path:req.path, random:Math.floor(Math.random()*100) });
});


const port = 8081;
app.listen(port, ()=>console.log(`Listening on port ${port}...`))
