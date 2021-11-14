const fs = require('fs')

const getWriter = (output) => {
    if (output) {
        if (!fs.existsSync(output)) {
            throw new Error('Output file not exist')
        }
        return fs.createWriteStream(output, {
            flags: 'a'
        })
    } else {
        return process.stdout
    }
}

exports.getWriter = getWriter