"use strict"
const http = require('http');
const port = 3000;
const randomQuote = require('./quoteList');

http.createServer((req, res) => {
    const quote = randomQuote.getQuote();
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(quote);
    res.end();
}).listen(port, () => console.log('I love you 3000'));