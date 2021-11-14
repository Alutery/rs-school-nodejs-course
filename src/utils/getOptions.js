const options = process.argv.slice(2)

const flags = {
    config: ['-c', '--config'],
    input: ['-i', '--input'],
    output: ['-o', '--output']
}

const getOptionValue = (flags) => {
    const flagIndexShort = options.filter(o => o === flags[0])
    const flagIndexLong = options.filter(o => o === flags[1])

    if (flagIndexShort.length + flagIndexLong.length > 1) {
        throw Error(`Option more than 1 (${flags[1]})`)
    }

    if (flagIndexShort.length) return flagIndexShort[0]
    if (flagIndexLong.length) return flagIndexLong[0]

    return null
}

const getOptions = () => {
    const config = getOptionValue(flags['config'])
    if (config === null) {
        throw new Error('No config option')
    }
    if (!/[C0|C1|A|R0|R1](-[C0|C1|A|R0|R1])*/.test(config)) {
        throw new Error('Invalid config')
    }

    const input = getOptionValue(flags['input'])
    const output = getOptionValue(flags['output'])

    return {
        config,
        input,
        output
    }
}

module.exports = getOptions