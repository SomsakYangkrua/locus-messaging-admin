import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [0],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      firstname: [''],
      lastname: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(3)]
      ],
      mobile: [''],
      role: [1],
      token: [''],
      tokenexpire: [''],
      lastlogin: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.userForm.value);
  }
}

