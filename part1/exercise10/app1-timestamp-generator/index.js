const crypto = require('crypto');
const fs = require('node:fs');

const mountPath = process.env.MOUNT_PATH != null ? process.env.MOUNT_PATH : '..'

const printTimestampWithRandomStringEveryFiveSeconds = () => {
    let timestamp = new Date().toISOString();
    let timeStampWithRandomUUID = `${timestamp}: ${crypto.randomUUID()}`;

    console.log(timeStampWithRandomUUID)

    fs.writeFile(`${mountPath}/timestamp.log`, timeStampWithRandomUUID, err => err != null ? console.error(err) : null );

    setTimeout(printTimestampWithRandomStringEveryFiveSeconds, 5000)
}

printTimestampWithRandomStringEveryFiveSeconds();