import { Request, Response } from "express";

const ARTISTS = [

    { id: 1, name: "Porter Robinson" }

]; 
export const getArtists = (req: Request, res: Response) => {
    res.send(ARTISTS); 
}
