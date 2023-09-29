
import express from 'express';
import configViewEngine from './configs/viewEngine';

require('dotenv').config() // to use dotenv
const app = express(); // like create a new class 

const port = process.env.PORT || 4040; // route to page web
configViewEngine(app);
app.get('/', (req, res) => { // request and response

    res.render('index.ejs')  // to return the request
})
// app.get('/theanh', (req, res) => {
//     res.send('The Anh 26!')
// })

app.listen(port, () => { // page web  u wanna to result on the screen
    console.log(`Example app listening on port ${port}`)
})