const fs = require('fs')

const getReader = (input) => {
    if (input) {
        if (!fs.existsSync(input)) {
            throw new Error('Input file not exist')
        }
        return fs.createReadStream(input)
    } else {
        return process.stdin
    }
}

exports.getReader = getReader