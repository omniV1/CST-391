import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameCubeService } from '../service/gamecube.service';
import { GameCube } from '../models/gamecube.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  gameCubes: GameCube[] = [];
  errorMessage: string = '';
  apiUrl: string = `${environment.apiUrl}/gamecubes`; // Initialize apiUrl in the class declaration

  constructor(
    private gameCubeService: GameCubeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Call loadGameCubes without any arguments
    this.loadGameCubes();
  }

  loadGameCubes(): void {
    this.gameCubeService.getAllGameCubes().subscribe({
      next: (data) => {
        this.gameCubes = data;
      },
      error: (err) => {
        this.errorMessage = `Error fetching game cubes: ${err}`;
      }
    });
  }
  

  viewDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }

  editGameCube(id: number): void {
    this.router.navigate(['/products', id, 'edit']);
  }

  deleteGameCube(id: number): void {
    this.gameCubeService.deleteGameCube(id).subscribe({
      next: () => {
        // Reload the list after deletion
        this.loadGameCubes();
      },
      error: (err) => {
        console.error('Error deleting game cube:', err);
        this.errorMessage = `Error deleting game cube: ${err}`;
      }
    });
  }
}
