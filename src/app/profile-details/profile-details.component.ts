import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../user-registration/user-details';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  userData?: UserDetails;

  constructor(public dialog: MatDialog, public router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
   this.userData = this.userService.userData;

   console.log(this.userData);
  }

  editProfile(){
    const dialogRef =  this.dialog.open(UserRegistrationComponent, {
      width: '100%',
      height: '100%',
      data: {
        title: 'Edit Profile',
        userData: this.userData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userService.setUserData(result);
      this.ngOnInit();
    });
  }
  

}
