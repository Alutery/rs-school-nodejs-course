class CipherParamError extends Error {
    constructor(param) {
        super(`Incorrect parameter for cipher: ${param}`)

        this.name = 'CipherParamsError'
        this.param = param
    }
}

module.exports = CipherParamError