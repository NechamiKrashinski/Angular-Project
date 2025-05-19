import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GymnastsService {

  gymnasts: any[] = [];
  constructor() { 
  this.gymnasts = [
    { id: 1, fullName: 'Sarah Rivka', phone: '050-1111111', lessonId: 10, price: 100, isPaid: true },
    { id: 2, fullName: 'Miriam Yael', phone: '050-2222222', lessonId: 2, price: 120, isPaid: true },
    { id: 3, fullName: 'Rivka Deborah', phone: '050-3333333', lessonId: 3, price: 80, isPaid: true },
    { id: 4, fullName: 'Hannah Michal', phone: '050-4444444', lessonId: 4, price: 90, isPaid: true },
    { id: 5, fullName: 'Leah Tzipora', phone: '050-5555555', lessonId: 5, price: 110, isPaid: true },
    { id: 6, fullName: 'Esther Chaya', phone: '050-6666666', lessonId: 6, price: 100, isPaid: true },
    { id: 7, fullName: 'Nechama Penina', phone: '050-7777777', lessonId: 7, price: 85, isPaid: true },
    { id: 8, fullName: 'Deborah Rachel', phone: '050-8888888', lessonId: 8, price: 95, isPaid: true },
    { id: 9, fullName: 'Bat Sheva Ayala', phone: '050-9999999', lessonId: 9, price: 105, isPaid: true },
    { id: 10, fullName: 'Yocheved Sharon', phone: '050-1010101', lessonId: 10, price: 120, isPaid: true },
    { id: 11, fullName: 'Chaya Rachel', phone: '050-1111123', lessonId: 10, price: 100, isPaid: true },
    { id: 12, fullName: 'Dina Esther', phone: '050-1111124', lessonId: 2, price: 120, isPaid: true },
    { id: 13, fullName: 'Rachel Leah', phone: '050-1111125', lessonId: 3, price: 80, isPaid: true },
    { id: 14, fullName: 'Shulamit Miriam', phone: '050-1111126', lessonId: 4, price: 90, isPaid: true },
    { id: 15, fullName: 'Batya Penina', phone: '050-1111127', lessonId: 5, price: 110, isPaid: true },
    { id: 16, fullName: 'Hannah Ayala', phone: '050-1111128', lessonId: 6, price: 100, isPaid: true },
    { id: 17, fullName: 'Esther Michal', phone: '050-1111129', lessonId: 7, price: 85, isPaid: true },
    { id: 18, fullName: 'Deborah Shira', phone: '050-1111130', lessonId: 8, price: 95, isPaid: true },
    { id: 19, fullName: 'Leah Hadassah', phone: '050-1111131', lessonId: 9, price: 105, isPaid: true },
    { id: 20, fullName: 'Miriam Bat Sheva', phone: '050-1111132', lessonId: 10, price: 120, isPaid: true },
    { id: 21, fullName: 'Avigail Hadassah', phone: '050-1111133', lessonId: 10, price: 100, isPaid: true },
    { id: 22, fullName: 'Tzipora Miriam', phone: '050-1111134', lessonId: 2, price: 120, isPaid: false },
    { id: 23, fullName: 'Chava Esther', phone: '050-1111135', lessonId: 3, price: 80, isPaid: true },
    { id: 24, fullName: 'Malka Rachel', phone: '050-1111136', lessonId: 4, price: 90, isPaid: false },
    { id: 25, fullName: 'Gitel Leah', phone: '050-1111137', lessonId: 5, price: 110, isPaid: true },
    { id: 26, fullName: 'Peyga Miriam', phone: '050-1111138', lessonId: 6, price: 100, isPaid: false },
    { id: 27, fullName: 'Sheina Rivka', phone: '050-1111139', lessonId: 7, price: 85, isPaid: true },
    { id: 28, fullName: 'Bluma Sarah', phone: '050-1111140', lessonId: 8, price: 95, isPaid: false },
    { id: 29, fullName: 'Hannah Gitel', phone: '050-1111141', lessonId: 9, price: 105, isPaid: true },
    { id: 30, fullName: 'Reizel Esther', phone: '050-1111142', lessonId: 10, price: 120, isPaid: false },
    { id: 31, fullName: 'Tova Miriam', phone: '050-1111143', lessonId: 10, price: 100, isPaid: true },
    { id: 32, fullName: 'Chaya Golda', phone: '050-1111144', lessonId: 2, price: 120, isPaid: false },
    { id: 33, fullName: 'Rivka Peyga', phone: '050-1111145', lessonId: 3, price: 80, isPaid: true },
    { id: 34, fullName: 'Deborah Tova', phone: '050-1111146', lessonId: 4, price: 90, isPaid: false },
    { id: 35, fullName: 'Sarah Bluma', phone: '050-1111147', lessonId: 5, price: 110, isPaid: true },
    { id: 36, fullName: 'Miriam Sheina', phone: '050-1111148', lessonId: 6, price: 100, isPaid: false },
    { id: 37, fullName: 'Leah Chaya', phone: '050-1111149', lessonId: 7, price: 85, isPaid: true },
    { id: 38, fullName: 'Esther Gitel', phone: '050-1111150', lessonId: 8, price: 95, isPaid: false },
    { id: 39, fullName: 'Penina Rachel', phone: '050-1111151', lessonId: 9, price: 105, isPaid: true },
    { id: 40, fullName: 'Shifra Miriam', phone: '050-1111152', lessonId: 10, price: 120, isPaid: false },
    { id: 41, fullName: 'Golda Esther', phone: '050-1111153', lessonId: 10, price: 100, isPaid: true },
    { id: 42, fullName: 'Rachel Miriam', phone: '050-1111154', lessonId: 2, price: 120, isPaid: false },
    { id: 43, fullName: 'Hannah Leah', phone: '050-1111155', lessonId: 3, price: 80, isPaid: true },
    { id: 44, fullName: 'Deborah Gitel', phone: '050-1111156', lessonId: 4, price: 90, isPaid: false },
    { id: 45, fullName: 'Peyga Sarah', phone: '050-1111157', lessonId: 5, price: 110, isPaid: true },
    { id: 46, fullName: 'Bluma Tova', phone: '050-1111158', lessonId: 6, price: 100, isPaid: false },
    { id: 47, fullName: 'Sheina Esther', phone: '050-1111159', lessonId: 7, price: 85, isPaid: true },
    { id: 48, fullName: 'Malka Penina', phone: '050-1111160', lessonId: 8, price: 95, isPaid: false },
    { id: 49, fullName: 'Chaya Reizel', phone: '050-1111161', lessonId: 10, price: 105, isPaid: true },
    { id: 50, fullName: 'Miriam Shifra', phone: '050-1111162', lessonId: 10, price: 120, isPaid: false },
    { id: 51, fullName: 'Esther Bluma', phone: '050-1111163', lessonId: 10, price: 100, isPaid: true },
    { id: 52, fullName: 'Rivka Tova', phone: '050-1111164', lessonId: 2, price: 120, isPaid: false },
    { id: 53, fullName: 'Sarah Gitel', phone: '050-1111165', lessonId: 3, price: 80, isPaid: true },
    { id: 54, fullName: 'Dina Sheina', phone: '050-1111166', lessonId: 4, price: 90, isPaid: false },
    { id: 55, fullName: 'Hannah Peyga', phone: '050-1111167', lessonId: 5, price: 110, isPaid: true },
    { id: 56, fullName: 'Leah Esther', phone: '050-1111168', lessonId: 10, price: 100, isPaid: false },
    { id: 57, fullName: 'Gitel Rachel', phone: '050-1111169', lessonId: 7, price: 85, isPaid: true },
    { id: 58, fullName: 'Penina Tova', phone: '050-1111170', lessonId: 8, price: 95, isPaid: false },
    { id: 59, fullName: 'Miriam Deborah', phone: '050-1111171', lessonId: 9, price: 105, isPaid: true },
    { id: 60, fullName: 'Shifra Chaya', phone: '050-1111172', lessonId: 10, price: 120, isPaid: false },
    
  ];

}
getAllGymnasts() {
  return this.gymnasts;
}
// getGymnastById(id: number) {
//   return this.gymnasts.find(gymnast => gymnast.lessonId === id).length;
// }
}

