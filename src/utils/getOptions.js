const options = process.argv.slice(2)

const flags = {
    config: ['-c', '--config'],
    input: ['-i', '--input'],
    output: ['-o', '--output']
}

const getOptionValue = (flags) => {
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
    if (!/[CAR][01]*(-[CAR][01]*)*/.test(config)) {
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