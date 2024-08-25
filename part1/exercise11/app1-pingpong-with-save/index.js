const http = require('http')
const fs = require('node:fs');

const PORT = process.env.PORT != null ? process.env.PORT : 3000;
const MOUNT_PATH = process.env.MOUNT_PATH != null ? process.env.MOUNT_PATH : '..';

let count = 0;

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/pingpong') {  // Only increment on requests to the main route
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`pong ${count++}`);
        fs.writeFile(`${MOUNT_PATH}/pingpong.log`, count + "", err => err != null ? console.error(`[ERROR #1] ${err}`) : null );
    } else if (req.url === '/pingpong/reset') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        count = 0;
        fs.writeFile(`${MOUNT_PATH}/pingpong.log`, count + "", err => err != null ? console.error(`[ERROR #2] ${err}`) : null );
        res.write("Pong counter is reset.");
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("Not Found..");
    }
    res.end();
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});