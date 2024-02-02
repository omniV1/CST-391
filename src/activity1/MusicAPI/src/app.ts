import express from 'express'; 
import albumsRouter from './albums/albums.routes'; 
import artistsRouter from './artists/artists.routes'; 
import logger from './middleware/logger.middleware'; 

const app = express(); 
const port = 3000;

// Middlewares to parse JSON and URL-encoded bodies should come first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
if (process.env.NODE_ENV === 'development') {
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

app.get('/', (req, res) => {
    res.send('Welcome to my music API!');
  });


// Routers
app.use('/', [albumsRouter, artistsRouter]);

// Starting the server on the specified port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
