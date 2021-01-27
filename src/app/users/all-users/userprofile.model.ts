import { timestamp } from "rxjs/operators";
import {formatDate} from '@angular/common';


export class UserProfile{
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  enable: number;
  role:   number;
  token: string;
  tokenexpire: string;
  createdate: string;
  lastlogin: string;

  constructor(user) {
    {
      this.id  = user.id || this.getUserID();
      this.username = user.username || '';
      this.password = user.password || '';
      this.firstname = user.firstname || '';
      this.lastname = user.lastname || '';
      this.email = user.email || '';
      this.mobile = user.mobile || '';
      this.enable = user.enable || 1;
      this.role = user.role || 1;
      this.token = '';
      this.tokenexpire = '';
      this.createdate = '';
      this.lastlogin  = '';
    }
  }

  public getUserID(): number {
    //2021127093931
    var id: string;
    id = formatDate(Date.now(),'MMddHHmmSS','en-US');
    return parseInt(id)
  }

}



