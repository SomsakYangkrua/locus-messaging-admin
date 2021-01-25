import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from './userprofile.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UsersService {
  private readonly API_URL = '/api/v1/users/list'; //'assets/data/rooms.json';
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
    this.httpClient.get<UserProfile[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addUser(user: UserProfile): void {
    this.dialogData = user;
  }
  updateUser(user: UserProfile): void {
    this.dialogData = user;
  }
  deleteUser(id: number): void {
    console.log(id);
  }
}
