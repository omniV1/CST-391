import { Component, OnInit } from '@angular/core';
import { GameCubeService } from '../service/gamecube.service';
import { GameCube } from '../models/gamecube.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    CommonModule, // Correctly importing CommonModule
    FormsModule,  // Correctly importing FormsModule
  ],
  standalone: true,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  gameCubes: GameCube[] = [];
  errorMessage!: string;

  constructor(private gameCubeService: GameCubeService) { }

  ngOnInit(): void {
    this.loadGameCubes();
  }

  loadGameCubes(): void {
    this.gameCubeService.getAllGameCubes().subscribe(
      (data) => {
        this.gameCubes = data;
      },
      (error) => {
        console.error('Error fetching game cubes', error);
      }
    );
  }
}