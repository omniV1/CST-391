// To use environment variables
import dotenv from 'dotenv';
dotenv.config();

// Print the environment variable to the console
console.log(process.env.GREETING);  // This should print: Hello from the environment file. Be kind to the environment!

// Importing the express module and specific types from 'express'
import express, { Request, Response } from 'express';

// Creating an instance of express
const app = express();

// The port number will now be taken from the environment variables if defined
const port = process.env.PORT || 9991; // Fallback to 9991 if the environment variable is not defined

// Handling GET requests to the root ('/') URL
// req represents the request object, res represents the response object
app.get('/', (req: Request, res: Response) => {
    // Sending a text response 'Hello World from TypeScript!' to the client
    res.send('Hello World from TypeScript!');
});

// Starting the server on the specified port
// The listen method takes the port number and an optional callback function
app.listen(port, () => {
    // This callback function is executed once the server starts listening
    // Logging the URL where the server is listening
    console.log(`Example app listening at http://localhost:${port}`);
});
