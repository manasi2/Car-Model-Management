import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {
  private baseUrl = 'https://localhost:5001/api/carmodels';

  constructor(private http: HttpClient) { }

  getCarModels(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCarModelById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createCarModel(carModel: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, carModel);
  }

  // Additional methods for Update, Delete, etc.
}
