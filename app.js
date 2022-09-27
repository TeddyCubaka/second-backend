const express = require('express');

const app = express();

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.post('/api/thanks', (req, res, next) => {
    console.log(req.body);
    res.status(200).json({ message : "Response recieved !" })
})

app.use('/api/thanks', (req, res, next) => {
    const thanks = {
        message : 'Thanks you for all !'
    }
    res.status(200).json(thanks);
    next();
})



module.exports = app;