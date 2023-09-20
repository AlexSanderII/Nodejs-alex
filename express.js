const express = require('express') // import salaries of express
const app = express(); // like create a new class 
const port = 4040; // route to page web

app.get('/', (req, res) => { // request and response
    res.send('Alex SanderIII, Hello World!') // to return the request
})
// app.get('/theanh', (req, res) => {
//     res.send('The Anh 26!')
// })

app.listen(port, () => { // page web  u wanna to result on the screen
    console.log(`Example app listening on port ${port}`)
})