import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  courses: any[] = [];
  constructor() {  
    this.courses = [
      { id: 1, lessonName: 'Yoga for Women', teacherName: 'Sara Cohen', sessionCount: 10, startDate: new Date('2025-06-01'), price: 500, day: 'Sunday', time: '18:00' },
      { id: 2, lessonName: 'Pilates for Women', teacherName: 'Miriam Levi', sessionCount: 8, startDate: new Date('2025-03-02'), price: 400, day: 'Monday', time: '19:00' },
      { id: 3, lessonName: 'Morning Exercise', teacherName: 'Rivka Gold', sessionCount: 12, startDate: new Date('2025-06-03'), price: 450, day: 'Tuesday', time: '08:00' },
      { id: 4, lessonName: 'Aerobics for Women', teacherName: 'Chaya Friedman', sessionCount: 10, startDate: new Date('2025-06-04'), price: 500, day: 'Wednesday', time: '20:00' },
      { id: 5, lessonName: 'Dance Class', teacherName: 'Leah Izraeli', sessionCount: 6, startDate: new Date('2025-06-05'), price: 350, day: 'Thursday', time: '17:00' },
      { id: 6, lessonName: 'Muscle Strengthening', teacherName: 'Ester Bar', sessionCount: 8, startDate: new Date('2025-06-08'), price: 400, day: 'Sunday', time: '10:00' },
      { id: 7, lessonName: 'Zumba', teacherName: 'Nechama Green', sessionCount: 10, startDate: new Date('2025-06-09'), price: 450, day: 'Monday', time: '18:30' },
      { id: 8, lessonName: 'Body Sculpting', teacherName: 'Devora Shapira', sessionCount: 9, startDate: new Date('2025-06-10'), price: 420, day: 'Tuesday', time: '19:30' },
      { id: 9, lessonName: 'Fitness Class', teacherName: 'Bat Sheva Katz', sessionCount: 7, startDate: new Date('2025-06-11'), price: 380, day: 'Wednesday', time: '18:00' },
      { id: 10, lessonName: 'Healthy Movement', teacherName: 'Yocheved Sharon', sessionCount: 6, startDate: new Date('2025-06-12'), price: 360, day: 'Thursday', time: '20:00' },
    ];
  }
  getAllCourses() {
    return this.courses;
  }
}

