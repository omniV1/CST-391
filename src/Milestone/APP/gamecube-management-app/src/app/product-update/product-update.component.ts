import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCubeService } from '../service/gamecube.service';
import { GameCube } from '../models/gamecube.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  successMessage: string = '';
  errorMessage: string = '';
  gameCube: GameCube = { id: 0, description: '', price: 0, color: '', quantity: 0, modelNumber: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameCubeService: GameCubeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.gameCubeService.getGameCubeById(id).subscribe({
        next: (data) => {
          this.gameCube = data;
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Failed to load GameCube';
        }
      });
    }
  }

  onUpdate(): void {
    this.gameCubeService.updateGameCube(this.gameCube).subscribe({
      next: () => {
        this.successMessage = 'GameCube updated successfully!';
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to update GameCube';
      }
    });
  }
}
