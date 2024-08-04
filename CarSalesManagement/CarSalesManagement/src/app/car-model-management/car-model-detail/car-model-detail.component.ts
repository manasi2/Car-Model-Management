import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-car-model-detail',
  templateUrl: './car-model-detail.component.html',
  styleUrls: ['./car-model-detail.component.scss']
})
export class CarModelDetailComponent implements OnInit {
  carModel: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCarModelDetail();
  }

  getCarModelDetail(): void {
    this.http.get<any>('api/car-model-detail')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error here
          console.error('An error occurred:', error.message);
          return throwError(() => new Error('Something went wrong'));
        })
      )
      .subscribe(data => {
        this.carModel = data;
      });
  }
}
