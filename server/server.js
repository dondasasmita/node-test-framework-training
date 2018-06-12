//load in express to set routes
const express = require('express')
const app = express()

//GET request '/'
app.get('/', (request, response) => {
    response.status(404).send({
        error: 'Page not found',
        name: 'Todo app version 1'
    })
})

//GET request '/users'
app.get('/users', (request, response) => {
    response.status(200).send([
        {name: 'David', age: 20},
        {name: 'Jasmine', age: 23},
        {name: 'Robby', age: 39}
    ])
})

//point app to port 3000 
app.listen(3000) 

//export app 
module.exports = {
    app
}