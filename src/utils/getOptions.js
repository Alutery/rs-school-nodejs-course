const options = process.argv.slice(2)

const flags = {
    config: ['-c', '--config'],
    input: ['-i', '--input'],
    output: ['-o', '--output']
}

const getOptionValue = (flags) => {
    const flagIndexesShort = options.filter(o => o === flags[0])
    const flagIndexesLong = options.filter(o => o === flags[1])

    if (flagIndexesShort.length + flagIndexesLong.length > 1) {
        throw Error(`Option more than 1 (${flags[1]})`)
    }

    const flagIndexShort = options.indexOf(flags[0])
    const flagIndexLong = options.indexOf(flags[1])

    if (flagIndexShort !== -1) return options[flagIndexShort + 1]
    if (flagIndexLong !== -1) return options[flagIndexLong + 1]

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