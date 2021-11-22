# Ciphering CLI Tool

RS School Node.js Course

## How to install

To install this application you must follow the following steps:

1. Download it from this repository;
2. Run the command line and go to the application folder;
3. Enter the command `npm install` or `npm i` and wait for the dependency installation process to complete;
4. The application is ready to go.

---

## How to use

After installation completed to start the application, in the folder with the application enter the following into the command line:

```bash
node cipher-cli [options]
```

Where options are command line parameters that determine the operation of the application (short alias and fll name):

1.  **-c, --config**: config for ciphers
    Config is a string with pattern `{XY(-)}n`, where:

- `X` is a cipher mark:
  - `C` is for Caesar cipher (with shift 1)
  - `A` is for Atbash cipher
  - `R` is for ROT-8 cipher
- `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
  - `1` is for encoding
  - `0` is for decoding

2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

---

## Examples of usage

```bash
$ node cipher-cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node cipher-cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node cipher-cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node cipher-cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`
