import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { UserService } from '../../users.service';
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
  userProfileForm: FormGroup;
  userProfile: UserProfile;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit User';
      this.userProfile = data.userProfile;
    } else {
      this.dialogTitle = 'New User';
      this.userProfile = new UserProfile({});
    }
    this.userProfileForm = this.createUserProfileForm();
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
      id: [this.userProfile.id],
      username: [this.userProfile.username],
      password: [this.userProfile.password],
      firstname: [this.userProfile.firstname],
      lastname: [this.userProfile.lastname],
      email: [this.userProfile.email],
      mobile: [this.userProfile.mobile],
      enable: [this.userProfile.enable],
      role: [this.userProfile.role]
    });
  }

  submit() {
    this.userService.updateUser(this.userProfile)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.userProfile = this.userProfileForm.value;
    if (this.userProfile.role == 1) {
      this.userProfile.roledesc = "Admin"
    }else{
      this.userProfile.roledesc = "User"
    }

    if (this.action === 'edit') {
      this.submit();
    }else{

      this.userService.addUser(this.userProfile);
    }

  }

}


