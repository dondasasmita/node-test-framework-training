/*
Simulation Test For an App with authentication 
Testing both the functions handleSignUp as well as saveUser when the it is called
Using spies to swap out the saveUser function for a testing utility
*/

//load in the db file
const db = require('./db.js')

//a function that will handle new sign up
handleSignUp = (email, password) => {
    //check if email already exists
    //save the user to the database
    db.saveUser({email,password})
    //send the welcome email
}

//exporting the functions
module.exports = {
    handleSignUp
}