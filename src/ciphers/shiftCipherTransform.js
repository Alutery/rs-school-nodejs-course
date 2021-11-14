const {
    Transform
} = require('stream')
const CipherParamError = require('../errors/cipherParamsError')
const {
    LOWER_CASE_LOWER_BOUND,
    UPPER_CASE_LOWER_BOUND,
    ALPHABET_LENGTH
} = require('../utils/constants')

class ShiftCipherTransform extends Transform {
    constructor(opt) {
        super(opt)

        if (typeof opt.isEncoding !== 'boolean') throw CipherParamError('Flag of encoding or decoding')
        if (typeof opt.shift !== 'number' || opt.shift < 0) throw CipherParamError('Shift')

        this.isEncoding = opt.isEncoding
        this.shift = opt.shift
    }

    _transform(chunk, encoding, callback) {
        const shift = this.isEncoding ? this.shift : -this.shift + ALPHABET_LENGTH
        const result = chunk.toString().split('').map(c => this._shift(c, shift))

        callback(null, result.join(''))
    }

    _shift(letter, shift) {
        if (this._isEnglishLetter(letter)) {
            const code = letter.charCodeAt(0)
            if (code >= LOWER_CASE_LOWER_BOUND) {
                return this._shiftCode(code, shift, LOWER_CASE_LOWER_BOUND)
            }

            if (code >= UPPER_CASE_LOWER_BOUND) {
                return this._shiftCode(code, shift, UPPER_CASE_LOWER_BOUND)
            }

        }
        return letter
    }

    _shiftCode(code, shift, lowerBound) {
        return String.fromCharCode(((code - lowerBound + shift) % ALPHABET_LENGTH) + lowerBound)
    }

    _isEnglishLetter(letter) {
        return letter.match(/[a-z]/i)
    }
}

module.exports = ShiftCipherTransform