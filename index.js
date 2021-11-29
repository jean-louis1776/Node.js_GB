const fs = require("fs");
const readline = require("readline");

const readStream = fs.createReadStream("./access.log", "utf8");

const file1 = fs.createWriteStream("./89.123.1.41_requests.log");
const file2 = fs.createWriteStream("./34.48.240.111_requests.log");

//readline module provides an interface for reading data

const read = readline.createInterface({
    input: readStream,
    terminal: true,
});

read.on("line", (line) => {
    // The includes () method checks if a string contains a given substring and returns true or false, respectively
    if (line.includes("89.123.1.41")) {
        file1.write(line + "\n");
    }

    if (line.includes("34.48.240.111")) {
        file2.write(line + "\n");
    }
});