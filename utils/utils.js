const add = (num1, num2) => num1 + num2

//creating asyncronous function 
const asyncAdd = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    }, 1000)
}

const square = (num1) => num1 * num1

//creating asyncronous function
const asyncSquare = (num, callback) => {
    setTimeout(() => {
        callback(num*num)
    }, 1000)
}

const setName = (user, fullName) => {
    let names = fullName.split(' ')
    user.firstName = names[0]
    user.lastName = names[1]
    return user
}

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}



