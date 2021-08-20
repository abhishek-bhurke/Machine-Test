import { Injectable } from '@angular/core';
import { UserDetails } from './user-registration/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   userData?: UserDetails;
   constructor() { }

  public setUserData(userData: UserDetails){
    this.userData = userData;
  }
}
