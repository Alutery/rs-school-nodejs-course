const {
    Transform
} = require('stream')

const alphabetBase = 'abcdefghijklmnopqrstuvwxyz'

const lowerCaseAlphabet = alphabetBase.split('')
const lowerCaseAlphabetReversed = lowerCaseAlphabet.slice().reverse()
const upperCaseAlphabet = alphabetBase.toUpperCase().split('')
const upperCaseAlphabetReversed = upperCaseAlphabet.slice().reverse()

class AtbashCipherTransform extends Transform {
    constructor(opt) {
        super(opt)
    }

    _transform(chunk, encoding, callback) {
        const result = chunk.toString().split('').map(c => this._reverseAlphabet(c))

        callback(null, result.join(''))
    }

    _reverseAlphabet(letter) {
        if (this._isEnglishLetter(letter)) {
            if (this._isUpperCase(letter)) {
                const index = upperCaseAlphabet.findIndex(l => letter === l)
                return upperCaseAlphabetReversed[index]
            }

            const index = lowerCaseAlphabet.findIndex(l => letter === l)
            return lowerCaseAlphabetReversed[index]
        }
        return letter
    }

    _isUpperCase(letter) {
        return letter === letter.toUpperCase()
    }

    _isEnglishLetter(letter) {
        return letter.match(/[a-z]/i)
    }
}

module.exports = AtbashCipherTransform