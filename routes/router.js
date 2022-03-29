const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from Express!');
});

router.get('/*xyz', (req, res) => {
    res.send("That's all I wrote.");
});


module.exports = router;