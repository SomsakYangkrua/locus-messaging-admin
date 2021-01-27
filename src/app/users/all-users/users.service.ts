import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from './userprofile.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  isTblLoading = true;
  dataChange: BehaviorSubject<UserProfile[]> = new BehaviorSubject<UserProfile[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}

  get data(): UserProfile[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllUsers(): void {
      this.httpClient.get<any>(`${environment.apiUrl}/api/v1/users/list`).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data.result);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  addUser(user: UserProfile): void {
    this.dialogData = user;
    this.httpClient.post<any>(`${environment.apiUrl}/api/v1/users/add`,
    user).subscribe(
      (data) => {
        this.dataChange.next(data.result);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  updateUser(user: UserProfile): void {
    this.dialogData = user;
    this.httpClient.put<any>(`${environment.apiUrl}/api/v1/users/update`,
    user).subscribe(
      (data) => {
        this.dataChange.next(data.result);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  deleteUser(id: number): void {
    console.log(id);
    this.httpClient.delete<any>(`${environment.apiUrl}/api/v1/users/delete/` + id).subscribe(
      (data) => {
        this.dataChange.next(data.result);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
}
