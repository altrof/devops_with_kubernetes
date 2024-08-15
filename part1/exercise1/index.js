const crypto = require('crypto');

const printTimestampWithRandomStringEveryFiveSeconds = () => {
    let timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${crypto.randomUUID()}`);

    setTimeout(printTimestampWithRandomStringEveryFiveSeconds, 5000)
}

printTimestampWithRandomStringEveryFiveSeconds();