import { CanActivateFn } from '@angular/router';

export const secretaryGuardGuard: CanActivateFn = (route, state) => {
  const role = sessionStorage.getItem('role')?.toString();
  if (role === 'secretary') 
    return true;
  return false;
};
