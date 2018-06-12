/*
TESTING FUNCTIONS
 */

//testing module
// read the full documentation here : https://github.com/mjackson/expect
const expect = require('expect')
//load the utils file
const utils = require('./utils')

/*
Function test, grouping them using describe
*/
describe('Utils functions', () => {
    it('should add two numbers', () => {
        var res = utils.add(10,20)
        //chaining the test, expect the result and the type 
        expect(res).toBe(30).toBeA('number')
    })
    
    it('should multiple itself one time', () => {
        let result = utils.square(8)
        //chaining the test, expect the result and the type 
        expect(result).toBe(8*8).toBeA('number')
    })
    
    it('should set firstname and lastname', () => {
        //create an object
        let donda = {}
        //call the function
        utils.setName(donda, 'Donda Sasmita')    
        //test if the object includes the listed properties
        expect(donda).toInclude({
            firstName: 'Donda',
            lastName: 'Sasmita'
        })
    })
})

/*
ASYNCRONOUS TEST , grouping them using describe
*/

describe('Utils async functions', () => {
//test will only be run when the done function has been called after the expect method
it('should async add two numbers', (done) => {
    utils.asyncAdd(3,3,(sum) => {
        expect(sum).toBe(6).toBeA('number')
        done()
    })
})

//test will only be run when the done function has been called after the expect method
it('should async multiply itself', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number')
        done()
    })
})

})


