import { RowDataPacket } from 'mysql2';
import connection from "../services/database";
import { GameCube } from "./gamecubes.model";
import { gameCubeQueries } from './gamecubes.queries';

export const readGameCubes = async (): Promise<GameCube[]> => {
    try {
        const [rows] = await connection.query<RowDataPacket[]>(gameCubeQueries.readGameCubes);
        return rows as GameCube[];
    } catch (error) {
        console.error('[gamecubes.dao][readGameCubes][Error]', error);
        throw error;
    }
};

export const readGameCubeById = async (id: number): Promise<GameCube | null> => {
    try {
        const [rows] = await connection.query<RowDataPacket[]>(gameCubeQueries.readGameCubeById, [id]);
        return rows.length ? (rows[0] as GameCube) : null;
    } catch (error) {
        console.error('[gamecubes.dao][readGameCubeById][Error]', error);
        throw error;
    }
};
