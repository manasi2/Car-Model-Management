import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.scss']
})
export class CarModelListComponent implements OnInit {
  carModels: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCarModels();
  }

  getCarModels(): void {
    this.http.get<any[]>('api/car-models')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error here
          console.error('An error occurred:', error.message);
          return throwError(() => new Error('Something went wrong'));
        })
      )
      .subscribe(data => {
        this.carModels = data;
      });
  }
}
