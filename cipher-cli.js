const {
    pipeline
} = require('stream')
const getTransformStreams = require('./src/ciphers/getTransformStreams')
const {
    getReader
} = require('./src/ioStreams/reader')
const {
    getWriter
} = require('./src/ioStreams/writer')
const getOptions = require('./src/utils/getOptions')

const options = () => {
    try {
        return getOptions()
    } catch (e) {
        console.error('Error occurred while reading options:', e.message)
        process.exit(1)
    }
}
const {
    config,
    input,
    output
} = options()


const transformStreams = () => {
    try {
        return getTransformStreams(config)
    } catch (e) {
        console.error('Error occurred while reading config:', e.message)
        process.exit(1)
    }
}

const reader = () => {
    try {
        return getReader(input)
    } catch (e) {
        console.error(e.message)
        process.exit(1)
    }
}

const writer = () => {
    try {
        return getWriter(output)
    } catch (e) {
        console.error(e.message)
        process.exit(1)
    }
}


pipeline(
    reader(),
    ...transformStreams(),
    writer(),
    error => {
        if (error) {
            console.error(error.message)
            process.exit(1)
        }
    }
)