const fs = require('fs')

const handleError = () => {
    console.error('Error occurred while reading input')
}

const getReader = (input) => {
    if (input) {
        return fs.createReadStream(input).on('error', handleError)
    } else {
        return process.stdin
    }
}

exports.getReader = getReader