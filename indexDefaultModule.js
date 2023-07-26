const fs = require('fs');

fs.readFile('textfile.txt', (err, data) => {
    if (!err) console.log(data.toString());
    else console.log(err);
})

const somedata = "Hello World";
fs.writeFile('textfiles.txt',
    somedata
    , (err) => {
        if (err) console.log(err);
        else console.log("Data written successfully")
    })

const extraData = "Hello World again";
fs.appendFile('textfi.txt',
    extraData
    , (err) => {
        if (err) console.log(err);
        else console.log("Data written successfully")
    })

fs.unlink('textfiles.txt', (err) => {
    if (err) console.log(err);
    else console.log("File deleted successfully")
})