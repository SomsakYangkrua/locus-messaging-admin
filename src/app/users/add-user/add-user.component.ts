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
      id: ['10000'],
      username: ['xx', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      password: ['x', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      firstname: ['x'],
      lastname: ['x'],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(3)]
      ],
      mobile: ['x'],
      role: [1],
      token: ['x'],
      tokenexpire: ['x'],
      lastlogin: ['x'],
    });
  }
  onSubmit() {
    console.log('Form Value', this.userForm.value);
  }
}

