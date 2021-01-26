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
      this.id  = user.id || 0;
      this.username = user.username || 'test';
      this.password = user.password || '123';
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

  // constructor(user) {
  //   {
  //     this.id  = 0;
  //     this.username = 'test';
  //     this.password = '123';
  //     this.firstname = '';
  //     this.lastname = '';
  //     this.email = '';
  //     this.mobile = '';
  //     this.enable = 1;
  //     this.role = 1;
  //     this.token = '';
  //     this.tokenexpire = '';
  //     this.createdate = '';
  //     this.lastlogin  = '';
  //   }
  // }

  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }

}



