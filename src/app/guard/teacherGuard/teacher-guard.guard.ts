import { CanActivateFn } from '@angular/router';

export const teacherGuardGuard: CanActivateFn = (route, state) => {
  let role = sessionStorage.getItem('role')?.toString();
  if (role == 'teacher') 
    return true;
  return false;
};
