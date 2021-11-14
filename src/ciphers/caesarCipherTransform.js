const ShiftCipherTransform = require('./shiftCipherTransform')

class CaesarCipherTransform extends ShiftCipherTransform {
    constructor(opt) {
        super({
            ...opt,
            shift: 1
        })
    }
}

module.exports = CaesarCipherTransform