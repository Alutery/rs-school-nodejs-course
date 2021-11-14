const {
    pipeline
} = require('stream')
// const getTransformStreams = require('./src/ciphers/getTransformStreams')
const {
    getReader
} = require('./src/ioStreams/reader')
const {
    getWriter
} = require('./src/ioStreams/writer')
const getOptions = require('./src/utils/getOptions')

const {
    config,
    input,
    output
} = getOptions()

// let transformStreams
// try {
//     transformStreams = getTransformStreams(config)
// } catch (e) {
//     console.error('Error occurred:', e.message)
//     process.exit(1)
// }

pipeline(
    getReader(input),
    // ...transformStreams,
    getWriter(output),
    error => {
        if (error) {
            console.error(error.message)
            process.exit(1)
        } else {
            console.log('Finished!')
        }
    }
)