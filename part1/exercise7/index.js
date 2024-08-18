const http = require('http')
const crypto = require('crypto');

let PORT = process.env.PORT != null ? process.env.PORT : 3000;

const printTimestampWithRandomString = () => {
    let timestamp = new Date().toISOString();
    return `${timestamp}: ${crypto.randomUUID()}`;
}

console.log(`Server run on port ${PORT}`)

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(printTimestampWithRandomString());
    res.end();
}).listen(PORT);