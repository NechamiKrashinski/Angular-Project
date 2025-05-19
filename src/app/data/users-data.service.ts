import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  users: any[] = [];
  constructor() { 
  this.users = [
    { username: 'Sara Cohen', password: '123456', role: 'teacher' },
    { username: 'Miriam Levi', password: '234567', role: 'teacher' },
    { username: 'Rivka Gold', password: '345678', role: 'teacher' },
    { username: 'Chaya Friedman', password: '456789', role: 'teacher' },
    { username: 'Leah Izraeli', password: '567891', role: 'teacher' },
    { username: 'Ester Bar', password: '678912', role: 'teacher' },
    { username: 'Nechama Green', password: '789123', role: 'teacher' },
    { username: 'Devora Shapira', password: '891234', role: 'teacher' },
    { username: 'Bat Sheva Katz', password: '912345', role: 'teacher' },
    { username: 'Yocheved Sharon', password: '123450', role: 'teacher' },
    { username: 'Shulamit Hadass', password: '234560', role: 'teacher' },
    { username: 'Chaya Ester', password: '345670', role: 'teacher' },
    { username: 'Rachel Miriam', password: '456780', role: 'teacher' },
    { username: 'Dina Leah', password: '567890', role: 'teacher' },
    { username: 'Tzippora Michal', password: '678901', role: 'teacher' },
    { username: 'Chana Rivka', password: '789012', role: 'teacher' },
    { username: 'Ester Batya', password: '890123', role: 'teacher' },
    { username: 'Pnina Ruth', password: '901234', role: 'teacher' },
    { username: 'Rivka Shira', password: '012345', role: 'teacher' },
    { username: 'Devora Ayala', password: '123451', role: 'teacher' },
    { username: 'Shira Hadass', password: '234561', role: 'teacher' },
    { username: 'Chana Rachel', password: '345671', role: 'teacher' },
    { username: 'Leah Batsheva', password: '456781', role: 'teacher' },
    { username: 'Miriam Dina', password: '567891', role: 'teacher' },
    { username: 'Rachel Ester', password: '678902', role: 'teacher' },
    { username: 'Devora Chaya', password: '789013', role: 'teacher' },
    { username: 'Ester Michal', password: '890124', role: 'teacher' },
    { username: 'Chaya Ayala', password: '901235', role: 'teacher' },
    { username: 'Shulamit Ruth', password: '012346', role: 'teacher' },
    { username: 'Sara Cohen', password: '123457', role: 'secretary' },
    { username: 'Miriam Levi', password: '234568', role: 'secretary' },
    { username: 'Rivka Gold', password: '345679', role: 'secretary' },
    { username: 'Chaya Friedman', password: '456780', role: 'secretary' },
    { username: 'Leah Izraeli', password: '567892', role: 'secretary' },
    { username: 'Ester Bar', password: '678913', role: 'secretary' },
    { username: 'Nechama Green', password: '789124', role: 'secretary' },
    { username: 'Devora Shapira', password: '891235', role: 'secretary' },
    { username: 'Bat Sheva Katz', password: '912346', role: 'secretary' },
    { username: 'Yocheved Sharon', password: '123451', role: 'secretary' }
  ];

}
get(name:string,password: string) {
  const user = this.users.find(user => user.username === name && user.password === password);
  if (user) {
    sessionStorage.setItem('role', user.role);
    return user.role;
  } else {
    return null;
  }
}
getAllUsers() {
  return this.users;}
}
