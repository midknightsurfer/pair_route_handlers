const express = require('express');
const app = express();

app.set("view engine", "pug");

app.all('*', (req,res)=>{
  res.render('layout', {method:req.method, path:req.path, random:Math.floor(Math.random()*100) });
});


const port = 8081;
app.listen(port, ()=>console.log(`Listening on port ${port}...`))
