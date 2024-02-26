import express from 'express';
import connection from './database';
import { ResultSetHeader } from 'mysql2';
import { OkPacket } from 'mysql2';
import { RowDataPacket } from 'mysql2';

const app = express();
const port = 9999;

app.use(express.json()); // Make sure to use this middleware to parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

// CREATE 
app.post('/gamecubes', async (req, res) => {
    // Assuming you are receiving modelNumber in the request body
    const { description, price, color, quantity, modelNumber } = req.body;
    try {
        const [result] = await connection.execute<ResultSetHeader>(
          'INSERT INTO GameCubes (Description, Price, Color, Quantity, ModelNumber) VALUES (?, ?, ?, ?, ?)',
          [description, price, color, quantity, modelNumber]
        );
        const insertId = (result as ResultSetHeader).insertId;
        res.status(201).json({ id: insertId });
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).send(error.message);
        } else {
          res.status(500).send('An unknown error occurred');
        }
    }
});

// READ 
app.get('/gamecubes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const [rows] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM gamecubes WHERE ID = ?',
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
  });
// READ ALL
app.get('/gamecubes', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM gamecubes');
    res.json(rows);
  } catch (error: unknown) { // Specify that error is of type unknown
    if (error instanceof Error) {
      res.status(500).send('Error while retrieving gamecubes: ' + error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
});
// UPDATE
app.put('/gamecubes/:id', async (req, res) => {
    const { id } = req.params;
    const { description, price, color, modelNumber, quantity } = req.body;
    try {
      const [result] = await connection.execute<OkPacket>(
        'UPDATE gamecubes SET Description = ?, Price = ?, Color = ?, Quantity = ?, ModelNumber = ? WHERE ID = ?',
        [description, price, color, quantity, modelNumber, id]
      );
      if ((result as OkPacket).affectedRows === 0) {
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
  });
  

// DELETE
app.delete('/gamecubes/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the URL parameter

    try {
        const [result] = await connection.execute<OkPacket>(
            'DELETE FROM gamecubes WHERE ID = ?',
            [id]
        );

        if ((result as OkPacket).affectedRows === 0) {
            // If no rows are affected, no GameCube with the ID was found
            res.status(404).send('No GameCube found with the given ID.');
        } else {
            // If rows are affected, the delete was successful
            res.send('GameCube deleted successfully.');
        }
    } catch (error) {
        // Error handling
        if (error instanceof Error) {
            res.status(500).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred');
        }
    }
});

