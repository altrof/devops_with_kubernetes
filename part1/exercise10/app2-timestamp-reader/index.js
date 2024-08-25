const fs = require('node:fs');
const http = require("http");

const MOUNT_PATH = process.env.MOUNT_PATH != null ? process.env.MOUNT_PATH : '..';
const PORT = process.env.PORT != null ? process.env.PORT : 3001;

const readAndPrintTimestampFromFile = () => {
    let timestamp = '';

    try {
        timestamp = fs.readFileSync(`${MOUNT_PATH}/timestamp.log`, 'utf8');
    } catch (err) {
        console.error(err)
    }

    console.log(timestamp)

    return timestamp;
}


console.log(`Server run on port ${PORT}`)

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(readAndPrintTimestampFromFile());
    res.end();
}).listen(PORT);