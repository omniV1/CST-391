import express from 'express';
import gameCubesRouter from '../src/gamecubes/gamecubes.routes';
import loggerMiddleware from '../src/middleware/logger.middleware';
import { errorLogger, errorHandler } from '../src/middleware/error.middleware';  
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();


app.use(express.json()); // Middleware to parse JSON request bodies
app.use(loggerMiddleware); // Log every request
app.use(helmet());

const corsOptions = {
    origin: process.env.NODE_ENV === 'development' ? '*' : 'https://OmniMods.com',
    optionsSuccessStatus: 200,
    
  };
  
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  
app.use(cors(corsOptions));
app.use(limiter);

// Mount game cubes routes
app.use('/gamecubes', gameCubesRouter);

// If an error is thrown from any of the routes, it will be caught here
app.use(errorLogger); // Log the error
app.use(errorHandler); // Send a generic error response

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
