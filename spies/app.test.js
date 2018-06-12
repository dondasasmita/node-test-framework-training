//load in the expect 
const expect = require('expect')
//load in rewire modules that lets us swap out variables for the test
const rewire = require('rewire')
//rewire loads the file through require and adding the two methods handleSignUp and saveUser
const app = rewire('./app')

describe('App', () => {
    let db = {
        //create spy to mock saveUser function
        saveUser: expect.createSpy()
    }
    //replace the db method in db.js with a mock db object above
    app.__set__('db', db)

    it('should call saveUser with user object', () => {
        //setting email and password dummy
        let email = 'email@domain.com'
        let password = '123456'
        //calling handleSignUp function
        app.handleSignUp(email,password)
        //expect to call the mock saveUser function/
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })
}) 