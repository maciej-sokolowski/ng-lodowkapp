import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private user: UserService) { }

  isLogged() {
    if (this.user.getLoggedUser()[0] === undefined) {
      return false
    } else {
      return this.user.getLoggedUser()[0].isLogged;
    }


  }

  isParent() {
    let isAnyoneLogged: boolean;
    if (this.user.getLoggedUser()[0] === undefined) {
      console.log('nikt nie zalogowany');
      isAnyoneLogged = false;
      return;
    } else if (this.user.getLoggedUser()[0].type === 'PARENT') {
      isAnyoneLogged = true;
    }

    return ((this.user.getItems().value.length === 0) || (isAnyoneLogged));
  }
}
