import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass'],
})
export class EditUserComponent {
  userForm: FormGroup;
  formdata = {
    id:0,
    username: 'admin',
    password: '123',
    firstname: 'Pooja',
    lastname: 'Sarma',
    email: 'test@example.com',
    mobile: '09',
    enable: 1,
    role:1,
  };

  constructor(private fb: FormBuilder) {
    this.userForm = this.createUserForm();
  }

  onSubmit() {
    console.log('Form Value', this.userForm.value);
  }

  createUserForm(): FormGroup {
    return this.fb.group({
      id: [this.formdata.id],
      username: [
        this.formdata.username,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      password: [
        this.formdata.password,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      firstname: [
        this.formdata.firstname,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      lastname: [this.formdata.lastname],
      mobile: [this.formdata.mobile, [Validators.required]],
      email: [
        this.formdata.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      enable: [this.formdata.enable],
      role: [this.formdata.role],
    });
  }
}
