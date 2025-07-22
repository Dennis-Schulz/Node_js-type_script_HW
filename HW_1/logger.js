const fs = require('fs');
const path = require('path');

function logMessage(message) {
    const log = `${new Date().toISOString()}: ${message}\n`;
    const filePath = path.join(__dirname, 'log.txt');
    
    fs.appendFile(filePath, log, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

module.exports = { logMessage };
