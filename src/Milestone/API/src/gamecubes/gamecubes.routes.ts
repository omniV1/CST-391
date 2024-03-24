import express from 'express';
import gameCubesController from './gamecubes.controllers';

const router = express.Router();

// Define routes for CRUD operations on game cubes
router.post('/', gameCubesController.createGameCube);
router.get('/:id', gameCubesController.getGameCubeById);
router.get('/', gameCubesController.getAllGameCubes);
router.put('/:id', gameCubesController.updateGameCube);
router.delete('/:id', gameCubesController.deleteGameCube);

export default router;
