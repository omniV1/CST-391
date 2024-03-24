import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameCubeService } from '../service/gamecube.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gameCubeService: GameCubeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      id: [''],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      color: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameCubeService.getGameCubeById(id).subscribe({
      next: (gameCube) => {
        this.productForm.patchValue(gameCube);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.gameCubeService.updateGameCube(this.productForm.value).subscribe({
        next: () => {
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
