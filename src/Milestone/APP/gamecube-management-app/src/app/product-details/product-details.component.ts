import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameCubeService } from '../service/gamecube.service';
import { GameCube } from '../models/gamecube.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  imports: [ CommonModule, RouterModule], 
  standalone: true,
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  gameCube: GameCube | undefined;
  errorMessage: string = '';

  constructor(
    private gameCubeService: GameCubeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getGameCube();
  }
  goBack(): void {
    this.router.navigate(['/products']);
  }

  getGameCube(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameCubeService.getGameCubeById(id).subscribe(
      (gameCube) => this.gameCube = gameCube,
      (error) => this.errorMessage = `Failed to load GameCube: ${error.message}`
    );
  }
}
