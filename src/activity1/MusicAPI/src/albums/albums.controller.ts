import { Request, Response } from 'express';

const ALBUMS = [
  { id: 1, name: 'Nurture (2021)', band: 'Porter Robinson' },
  { id: 2, name: 'Worlds (2014)', band: 'Porter Robinson' },
  { id: 3, name: 'Secret Sky (2021)', band: 'Porter Robinson' },
  { id: 4, name: 'Second Sky (2021)', band: 'Porter Robinson' },
  { id: 5, name: 'Virtual Self (2017, EP)', band: 'Porter Robinson' },
  { id: 6, name: 'Spitfire (2011, EP)', band: 'Porter Robinson' },
  { id: 7, name: 'Shelter Complete Edition (2021)', band: 'Porter Robinson' },
  { id: 8, name: 'Second Sky (2022, DJ Mix)', band: 'Porter Robinson' },
  { id: 9, name: 'Worlds (Remixed) (2021)', band: 'Porter Robinson' },
  { id: 10, name: 'Waiting For Tonight (2021)', band: 'Porter Robinson' }
];

export const getAlbums = (req: Request, res: Response) => {
  res.send(ALBUMS);
};
