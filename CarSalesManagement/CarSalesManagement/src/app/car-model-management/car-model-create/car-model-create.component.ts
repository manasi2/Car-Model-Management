import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarModelService } from '../services/car-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-model-create',
  templateUrl: './car-model-create.component.html',
  styleUrls: ['./car-model-create.component.scss']
})
export class CarModelCreateComponent implements OnInit {
  carModelForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carModelService: CarModelService,
    private router: Router
  ) {
    this.carModelForm = this.fb.group({
      brand: ['', Validators.required],
      class: ['', Validators.required],
      modelName: ['', Validators.required],
      modelCode: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]*$')]],
      description: ['', Validators.required],
      features: ['', Validators.required],
      price: ['', Validators.required],
      dateOfManufacturing: ['', Validators.required],
      active: [true],
      sortOrder: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.carModelForm.valid) {
      this.carModelService.createCarModel(this.carModelForm.value).subscribe(
        () => {
          this.router.navigate(['/car-model']);
        },
        (error: any) => { // Explicitly type the 'error' parameter as 'any'
          console.error(error);
        }
      );
    }
  }
}



