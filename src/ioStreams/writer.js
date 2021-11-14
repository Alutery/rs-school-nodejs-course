const fs = require('fs')

const getWriter = (output) => {
    if (output) {
        return fs.createWriteStream(output)
    } else {
        return process.stdout
    }
}

exports.getWriter = getWriter