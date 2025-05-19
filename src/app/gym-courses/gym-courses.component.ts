import { Component } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { NgFor } from '@angular/common';
import { UsersDataService } from '../data/users-data.service';
import { CoursesDataService } from '../data/courses-data.service';

@Component({
  selector: 'app-gym-courses',
  standalone: true,
  imports: [CourseComponent,NgFor],
  templateUrl: './gym-courses.component.html',
  styleUrl: './gym-courses.component.css'
})
export class GymCoursesComponent {
  courses: any[] = [];
  constructor(dataUsers:CoursesDataService){
    this.courses = dataUsers.getAllCourses();
  }

}
