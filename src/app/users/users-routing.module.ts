import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUserComponent } from './all-users/all-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {
    path: 'all-users',
    component: AllUserComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
