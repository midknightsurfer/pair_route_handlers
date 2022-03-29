const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from Express!');
});

router.get('/*xyz', (req, res) => {
    res.send("That's all I wrote.");
});

router.get('/capital-letters/:id', (req,res)=>{
    res.send(req.params.id.toUpperCase());
})

router.get('*/bio',(req,res)=>{
    res.send('Bio');
});

router.get('*/contact',(req,res)=>{
    res.send('Contact');
});

module.exports = router;
