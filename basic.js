const colors = require('colors')
const cowsay = require('cowsay')

const helloWorld = () => {

    console.log(
        cowsay.think({
            text: 'Hey man!',
            e: '^^',
            r: true,
        })
    )
}

helloWorld()

