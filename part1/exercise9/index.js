const http = require('http')

let PORT = process.env.PORT != null ? process.env.PORT : 3000;

let count = 0;

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/pingpong') {  // Only increment on requests to the main route
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`pong ${count++}`);
    } else if (req.url === '/pingpong/reset') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        count = 0;
        res.write("Pong counter is reset.");
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("Not Found..");
    }
    res.end();
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});