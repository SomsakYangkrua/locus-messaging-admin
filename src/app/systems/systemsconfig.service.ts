import { Systemconfig } from './systemconfig.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SystemsconfigService {
  constructor(private httpClient: HttpClient) {}

  getSystemConfig(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/v1/systems/config/list`);
  }

  updateSystemConfig(systemConfig: Systemconfig): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/v1/systems/config/update`, systemConfig);
  }
}


