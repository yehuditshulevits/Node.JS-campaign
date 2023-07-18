const express = require('express');

require('dotenv').config();
//const logger = require('./middlewares/logger');

const donates = require('./routes/donates')
const fundRaiser = require('./routes/fundRaiser')
const groups =require('./routes/groups')
const app = express();
const port = process.env.PORT || 3000;

//app.use(logger('start'));
app.use(express.json());//the middleware will ensure that all body is loaded (mostly for POST request)

// app.get('/', (req, res) => {
//     res.contentType = "text/html"
//     res.send(`<h1>hello from my api</h1>
//     <ul>
//         <li><a href="http://127.0.0.1:${port}/api/students/">get all students</a></li>
//     </ul>`);
// })

app.use('/api/donates', donates);
app.use('/api/fundraiser',fundRaiser);
app.use('/api/groups',groups)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });
  

//app.use(logger('end'));

app.listen(port, () => {
    console.log(`I am up in http://127.0.0.1:${port}`);
})
