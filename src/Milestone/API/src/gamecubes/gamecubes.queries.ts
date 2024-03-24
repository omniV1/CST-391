export const gameCubeQueries = {
  createGameCube:
      `INSERT INTO GameCubes (Description, Price, Color, Quantity, ModelNumber) VALUES (?, ?, ?, ?, ?)`,
  readGameCubes:
      `SELECT ID as id, Description as description, Price as price, Color as color, Quantity as quantity, ModelNumber as modelNumber FROM GameCubes`,
  readGameCubeById:
      `SELECT ID as id, Description as description, Price as price, Color as color, Quantity as quantity, ModelNumber as modelNumber FROM GameCubes WHERE ID = ?`,
  updateGameCube:
      `UPDATE GameCubes SET Description = ?, Price = ?, Color = ?, Quantity = ?, ModelNumber = ? WHERE ID = ?`,
  deleteGameCube:
      `DELETE FROM GameCubes WHERE ID = ?`,
  
};
