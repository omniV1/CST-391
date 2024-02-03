import express, { Request, Response } from 'express';
import albumsRouter from './albums/albums.routes'; 
import artistsRouter from './artists/artists.routes'; 
import logger from './middleware/logger.middleware'; 
import helmet from 'helmet';
import dotenv from "dotenv"; 
import cors from 'cors';

dotenv.config();

const app = express(); 
const port = process.env.PORT; 

// enable all CORS request 
app.use(cors()); 

// Parse JSON bodies
app.use(express.urlencoded({extended: true})); 

// adding set of security middleware
app.use(helmet()); 

console.log(process.env.MY_SQL_DB_HOST); 

//MySQlConnector.initializeMySqlConnector(); 

if (process.env.NODE_ENV == 'development') {
    //add logger middleware
    app.use(logger); 
    console.log(process.env.GREETING + ' in dev mode')
}

// Application routes
// root route 
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API<h1/>');
}); 
// adding router middleware
app.use('/', [albumsRouter , artistsRouter] ); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
