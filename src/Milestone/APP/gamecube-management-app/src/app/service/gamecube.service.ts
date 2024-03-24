import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameCube } from '../models/gamecube.model'; // Path to your model

@Injectable({
  providedIn: 'root'
})
export class GameCubeService {
  private apiUrl = 'http://localhost:3000/gamecubes'; // URL to your API

  constructor(private http: HttpClient) { }

  getAllGameCubes(): Observable<GameCube[]> {
    return this.http.get<GameCube[]>(this.apiUrl);
  }

  getGameCubeById(id: number): Observable<GameCube> {
    return this.http.get<GameCube>(`${this.apiUrl}/${id}`);
  }

  createGameCube(gameCube: GameCube): Observable<GameCube> {
    return this.http.post<GameCube>(this.apiUrl, gameCube);
  }

  updateGameCube(gameCube: GameCube): Observable<GameCube> {
    return this.http.put<GameCube>(`${this.apiUrl}/${gameCube.id}`, gameCube);
  }

  deleteGameCube(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
