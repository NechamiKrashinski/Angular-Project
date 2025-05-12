import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  courses: any[] = [];
  constructor() {  
    this.courses = [
      { id: 1, lessonName: 'יוגה לנשים', teacherName: 'דבורה כהן', sessionCount: 10, startDate: new Date('2025-06-01'), price: 500, day: 'ראשון', time: '18:00' },
      { id: 2, lessonName: 'פילאטיס לנשים', teacherName: 'שרה לוי', sessionCount: 8, startDate: new Date('2025-06-05'), price: 400, day: 'שני', time: '19:00' },
      { id: 3, lessonName: 'התעמלות בוקר', teacherName: 'מרים כהן', sessionCount: 12, startDate: new Date('2025-06-10'), price: 450, day: 'שלישי', time: '08:00' },
      { id: 4, lessonName: 'אירובי לנשים', teacherName: 'חנה פרידמן', sessionCount: 10, startDate: new Date('2025-06-15'), price: 500, day: 'רביעי', time: '20:00' },
      { id: 5, lessonName: 'שיעור ריקוד', teacherName: 'לאה ישראלי', sessionCount: 6, startDate: new Date('2025-06-20'), price: 350, day: 'חמישי', time: '17:00' },
      { id: 6, lessonName: 'חיזוק שרירים', teacherName: 'רבקה לוי', sessionCount: 8, startDate: new Date('2025-06-25'), price: 400, day: 'ראשון', time: '10:00' },
      { id: 7, lessonName: 'זומבה', teacherName: 'אסתר ברקוביץ', sessionCount: 10, startDate: new Date('2025-06-30'), price: 450, day: 'שני', time: '18:30' },
      { id: 8, lessonName: 'עיצוב וחיטוב', teacherName: 'דבורה גרין', sessionCount: 9, startDate: new Date('2025-07-05'), price: 420, day: 'שלישי', time: '19:30' },
      { id: 9, lessonName: 'שיעור כושר', teacherName: 'יעל כהן', sessionCount: 7, startDate: new Date('2025-07-10'), price: 380, day: 'רביעי', time: '18:00' },
      { id: 10, lessonName: 'תנועה בריאה', teacherName: 'נחמה שפירא', sessionCount: 6, startDate: new Date('2025-07-15'), price: 360, day: 'חמישי', time: '20:00' },
    ];
  }
  getAllCourses() {
    return this.courses;
  }
}

