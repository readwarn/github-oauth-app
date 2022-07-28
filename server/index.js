require('dotenv').config();
const axios = require('axios');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://calm-kataifi-538d1c.netlify.app');
    next();
});

app.get('/', (req, res) => {
    res.send('Rilwan Server Home')
})

app.get('/github-access-token/:code', async(req, res) => {
    let response = await axios.post(`https://github.com/login/oauth/access_token?client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&code=${req.params.code}`);
    res.json(response.data);
})

app.listen(3000, () => {
    console.log('server started')
})