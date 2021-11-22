const CaesarCipherTransform = require('./caesarCipherTransform')
const AtbashCipherTransform = require('./atbashCipherTransform')
const ROT8CipherTransform = require('./ROT8CipherTransform')

const getTransformStream = (cipher, isEncoding) => {
    switch (cipher) {
        case 'C':
            return new CaesarCipherTransform({
                isEncoding: isEncoding === '1',
            })
        case 'A':
            if (isEncoding !== undefined) {
                throw Error('Flag of encoding or decoding should not be passed Atbash cipher')
            }
            return new AtbashCipherTransform()
        case 'R':
            return new ROT8CipherTransform({
                isEncoding: isEncoding === '1'
            })
        default:
            throw Error('Invalid cipher mark')
    }
}

const getTransformStreams = (config) => {
    return config.split('-').map(c => getTransformStream(...c.split('')))
}

module.exports = getTransformStreams