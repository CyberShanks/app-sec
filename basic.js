const colors = require('colors')
const cowsay = require('cowsay')
const sanitize = require('path-sanitizer').default

const helloWorld = () => {

    console.log(
        cowsay.think({
            text: 'Hey man!',
            e: '^^',
            r: true,
        })
    )

    console.log(sanitize('path/to/file.txt'))
}

helloWorld()

