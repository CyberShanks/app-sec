const colors = require('colors')
const cowsay = require('cowsay')

const helloWorld = () => {

    console.log(
        cowsay.say({
            text: 'hey man!',
            e: 'xx',
            r: true,
        })
    )
}

helloWorld()

