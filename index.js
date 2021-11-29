const colors = require('colors')

const primeArr = []

if (isNaN(process.argv[2]) || isNaN(process.argv[3])) {
    console.log(colors.red(`Error! It's not a number!`))
} else {
    console.log(colors.blue(`Range of numbers to sample ${process.argv[2]} - ${process.argv[3]}`))
}

for (let i = process.argv[2]; i <= process.argv[3]; i++) {
    let flag = 0

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1
            break
        }
    }

    if (i > 1 && flag == 0) {
        primeArr.push(i)
    }
}


if (!primeArr.length) {
    console.log(colors.red('There are no primes in the specified range.'))
} else {
    primeArr.forEach(item => {
        switch (primeArr.indexOf(item) % 3) {
            case 0:
                console.log(colors.green(item))
                break
            case 1:
                console.log(colors.yellow(item))
                break
            case 2:
                console.log(colors.red(item))
                break
        }
    })
}