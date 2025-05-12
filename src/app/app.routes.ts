import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { teacherGuardGuard } from './guard/teacherGuard/teacher-guard.guard';
import { secretaryGuardGuard } from './guard/secretaryGuard/secretary-guard.guard';
import { GymCoursesComponent } from './gym-courses/gym-courses.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'gymCourses', component: GymCoursesComponent ,canActivate: [teacherGuardGuard]},
    { path: 'user', component: UserComponent,canActivate:[secretaryGuardGuard] },
];
