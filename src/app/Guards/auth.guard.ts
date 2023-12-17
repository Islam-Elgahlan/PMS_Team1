import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const route = inject(Router);
  // constructor(private router:Router){}
  const token = localStorage.getItem('userToken');

  if (token !== null) {
    return true;
  } else {
    return false;
  }
};
