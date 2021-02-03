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

  updateSystemConfig(systemConfig: Systemconfig): void {
    //192.168.22.129:15000/api/v1/systems/config/update
    //this.dialogData = systemConfig;
  }
}


