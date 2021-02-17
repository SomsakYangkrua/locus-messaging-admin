import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {}

  getDashboard(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/v1/systems/dashboard`);
  }

}
