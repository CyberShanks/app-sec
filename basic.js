const colors = require('colors')
const cowsay = require('cowsay')
const sanitize = require('path-sanitizer').default
var serialize = require('serialize-javascript');




const helloWorld = () => {

    console.log(
        cowsay.think({
            text: 'Hey man!',
            e: '^^',
            r: true,
        })
    )

    console.log(serialize({
    str  : 'string',
    num  : 0,
    obj  : {foo: 'foo'},
}))

    console.log(sanitize('path/to/file.txt'))
    console.log('testing2')
}

helloWorld()

