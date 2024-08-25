const fs = require('node:fs');
const http = require("http");

const MOUNT_PATH = process.env.MOUNT_PATH != null ? process.env.MOUNT_PATH : '..';
const PORT = process.env.PORT != null ? process.env.PORT : 3002;

const readAndPrintTimestampWithPingPongFromFile = () => {
    let timestamp = '';
    let pingPongCount = 0;
    let pingPong = 0;
    let result = '';

    try {
        timestamp = fs.readFileSync(`${MOUNT_PATH}/timestamp.log`, 'utf8');
        pingPongCount = fs.readFileSync(`${MOUNT_PATH}/pingpong.log`, 'utf8');
        pingPong = `Ping / pong: ${pingPongCount}`

        result = timestamp + "\n" + pingPong;
    } catch (err) {
        console.error(err)
    }

    console.log(result)

    return result;
}


console.log(`Server run on port ${PORT}`)

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(readAndPrintTimestampWithPingPongFromFile());
    res.end();
}).listen(PORT);