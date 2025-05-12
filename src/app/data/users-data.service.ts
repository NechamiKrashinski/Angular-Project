import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  users: any[] = [];
  constructor() { 
  this.users = [
    { id: 1, fullName: 'שרה רבקה', phone: '050-1111111', password: '123456789', lessonId: 1, price: 100, isPaid: true, role: 'teacher' },
    { id: 2, fullName: 'מרים יעל', phone: '050-2222222', password: '234567891', lessonId: 2, price: 120, isPaid: false, role: 'secretary' },
    { id: 3, fullName: 'רבקה דבורה', phone: '050-3333333', password: '345678912', lessonId: 3, price: 80, isPaid: true, role: 'teacher' },
    { id: 4, fullName: 'חנה מיכל', phone: '050-4444444', password: '456789123', lessonId: 4, price: 90, isPaid: false, role: 'secretary' },
    { id: 5, fullName: 'לאה ציפורה', phone: '050-5555555', password: '567891234', lessonId: 5, price: 110, isPaid: true, role: 'teacher' },
    { id: 6, fullName: 'אסתר חיה', phone: '050-6666666', password: '678912345', lessonId: 6, price: 100, isPaid: false, role: 'secretary' },
    { id: 7, fullName: 'נחמה פנינה', phone: '050-7777777', password: '789123456', lessonId: 7, price: 85, isPaid: true, role: 'teacher' },
    { id: 8, fullName: 'דבורה רחל', phone: '050-8888888', password: '891234567', lessonId: 8, price: 95, isPaid: false, role: 'secretary' },
    { id: 9, fullName: 'בת שבע אילה', phone: '050-9999999', password: '912345678', lessonId: 9, price: 105, isPaid: true, role: 'teacher' },
    { id: 10, fullName: 'יוכבד שרון', phone: '050-1010101', password: '123456780', lessonId: 10, price: 120, isPaid: false, role: 'secretary' },
  ];

}
get(name:string,password: string) {
  const user = this.users.find(user => user.fullName === name && user.password === password);
  if (user) {
    sessionStorage.setItem('role', user.role);
    return user.role;
  } else {
    return null;
  }
}

}
