const express = require('express');
const app = express();
const CurrencyRoute = require('./routes/currency');
const http = require('http');
const { route } = require('express/lib/application');
const hostname = '192.168.100.5';
const port = 3000;

app.use(CurrencyRoute);

// const server = http.createServer(CurrencyRoute);

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`);
// });

app.listen(port, hostname, function () {
    console.log(`Server running on: http://${hostname}:${port}`);
});