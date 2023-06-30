import { v4 as uuidv4 } from 'uuid';

let users = [];

//Gets route retrieves all users from the array database
export const getUsers = (req, res) => {
    res.send(users);
}

//Adds users to the database, sends data and descriptions from front end to the server and implements a unique ID for each new user
export const createUser = (req, res) => {
    const user = req.body; //Retrieves the input/body from the request on Postman
    users.push({ ... user, id: uuidv4()}); 
    res.send(`User with the name ${user.firstName} added to the database!`);
}

//Locates the user and their descriptions based on the specific ID 
export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}

//Filters through users and deletes the user matching the ID
export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
}

//Requests new bodies from front end, locates matching user ID, and modifies the stored data of the users
export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body; //Request data from the front end on Postman so data can be modified
    const user = users.find((user) => user.id == id); //Finds the user to be modified by searching through ID

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
}