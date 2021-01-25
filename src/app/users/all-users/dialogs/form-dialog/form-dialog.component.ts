import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { UsersService } from '../../users.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { UserProfile } from '../../userprofile.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  userForm: FormGroup;
  user: UserProfile;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public UsersService: UsersService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit User';
      this.user = data.UserProfile;
    } else {
      this.dialogTitle = 'New User';
      this.user = new UserProfile();
    }
    this.userForm = this.createUserProfileForm();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
        ? 'Not a valid email'
        : '';
  }
  createUserProfileForm(): FormGroup {
    return this.fb.group({
      id: [this.user.id],
      username: [this.user.username],
      password: [this.user.password],
      firstname: [this.user.firstname],
      lastname: [this.user.lastname],
      email: [this.user.email],
      mobile: [this.user.mobile],
      enable: [this.user.enable],
      role: [this.user.role]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.UsersService.addUser(this.userForm.getRawValue());
  }
}
