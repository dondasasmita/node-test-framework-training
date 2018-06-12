/*
TESTING API REQUEST
*/

//load in supertest module for testing HTTP requests
const request = require('supertest')
const expect = require('expect')

const app = require ('./server.js').app

describe('Server Test', () => {
//test request get '/'
describe('GET /', () => {
    it('should load error page body', (done) => {
        request(app)
        .get('/')
        .expect(404)
        .expect((response) => {
            expect(response.body).toInclude({
                error: 'Page not found'
            })
        })
        .end(done)
    })
})
//test request get '/users'
describe('GET /users', () => {
    it('should return users and their properties', (done) => {
        request(app)
        .get('/users')
        .expect(200)
        .expect((response) => {
            expect(response.body).toInclude(
                {name: 'David', age: 20})
        })
        .end(done)
    })

})
})

