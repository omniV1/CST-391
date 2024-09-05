import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCubeService } from '../service/gamecube.service';
import { GameCube } from '../models/gamecube.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  gameCube: GameCube | undefined;
  errorMessage: string = '';

  constructor(
    private gameCubeService: GameCubeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGameCube();
  }

  getGameCube(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameCubeService.getGameCubeById(id).subscribe({
      next: (gameCube) => {
        this.gameCube = gameCube;
      },
      error: (err) => {
        this.errorMessage = `Failed to load GameCube: ${err.message}`;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}

