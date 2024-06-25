import { CanActivateFn } from '@angular/router';

export const privilegiosGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("rol")=="admin"){
    return true
  }else{
    return false;
  }
};

export const meseroGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("rol")=="mesero"){
    return true
  }else{
    return false;
  }
};