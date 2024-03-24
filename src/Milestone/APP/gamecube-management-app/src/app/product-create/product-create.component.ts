import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameCubeService } from '../service/gamecube.service';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gameCubeService: GameCubeService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      color: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      modelNumber: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.gameCubeService.createGameCube(this.productForm.value).subscribe({
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
