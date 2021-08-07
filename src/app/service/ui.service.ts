import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {

  public token!: string;

  constructor(private http: HttpClient) {}

  authenticate(user: any): Observable<any> {
    return this.http.post('/authenticate', user);
  }

  retrieveMedicineStock(): Observable<any>{
    return this.http.get('/stock/medicineStockInformation');
  }
}
