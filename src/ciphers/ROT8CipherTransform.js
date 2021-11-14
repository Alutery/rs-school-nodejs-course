const ShiftCipherTransform = require('./shiftCipherTransform')

class ROT8CipherTransform extends ShiftCipherTransform {
    constructor(opt) {
        super({
            ...opt,
            shift: 8
        })
    }
}

module.exports = ROT8CipherTransform