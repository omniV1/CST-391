import { Request, Response } from 'express';
import connection from '../services/database';
import { FieldPacket, OkPacket, RowDataPacket } from 'mysql2';

const gameCubesController = {
  async createGameCube(req: Request, res: Response): Promise<void> {
    const { description, price, color, quantity, modelNumber } = req
    .body;
    try {
      const [result] = await connection.execute<OkPacket>(
        'INSERT INTO GameCubes (Description, Price, Color, Quantity, ModelNumber) VALUES (?, ?, ?, ?, ?)',
        [description, price, color, quantity, modelNumber]
      );      
      const insertId = result.insertId;
      res.status(201).json({ id: insertId });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  },

  async getGameCubeById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const [rows] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM GameCubes WHERE ID = ?',
        [id]
      );
      
      if (rows.length === 0) {
        res.status(404).send('GameCube not found');
      } else {
        res.json(rows[0]);
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  },

  async getAllGameCubes(req: Request, res: Response): Promise<void> {
    try {
      const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM GameCubes');
      res.json(rows);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  },

  async updateGameCube(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { description, price, color, modelNumber, quantity } = req.body;
    try {
      const [result] = await connection.execute<OkPacket>(
        'UPDATE GameCubes SET Description = ?, Price = ?, Color = ?, Quantity = ?, ModelNumber = ? WHERE ID = ?',
        [description, price, color, quantity, modelNumber, id]
      );
      
      if (result.affectedRows === 0) {
        res.status(404).send('No GameCube found with the given ID.');
      } else {
        res.send('GameCube updated successfully.');
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  },

  async deleteGameCube(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const [result] = await connection.execute<OkPacket>(
        'DELETE FROM GameCubes WHERE ID = ?',
        [id]
      );
      
      if (result.affectedRows === 0) {
        res.status(404).send('No GameCube found with the given ID.');
      } else {
        res.send('GameCube deleted successfully.');
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  }
};

export default gameCubesController;
