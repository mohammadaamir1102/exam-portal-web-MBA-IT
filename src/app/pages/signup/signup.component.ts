import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void { }

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.username.length < 6) {
      // alert('User is required !!');
      this.snack.open('Username more than 6 characters ! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password.length < 6) {
      // alert('User is required !!');
      this.snack.open('Password must be at least 6 alphanumeric ! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.firstName == '' || this.user.firstName == null) {
      // alert('User is required !!');
      this.snack.open('First Name is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.firstName.length < 3) {
      // alert('User is required !!');
      this.snack.open('First Name must be at least 3 characters ! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.lastName == '' || this.user.lastName == null) {
      // alert('User is required !!');
      this.snack.open('Last Name is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.lastName.length < 3) {
      // alert('User is required !!');
      this.snack.open('Last Name must be at least 3 characters ! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.email == '' || this.user.email == null) {
      // alert('User is required !!');
      this.snack.open('Email is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.email.indexOf("@gmail.com") == -1) {
      // alert('User is required !!');
      this.snack.open('Please insert valid mail ! ', '', {
        duration: 3000,
      });
      return;
    }



    if (this.user.phone == '' || this.user.phone == null) {
      // alert('User is required !!');
      this.snack.open('Phone no is required !! ', '', {
        duration: 3000,
      });
      return;
    }

  


    //validate

    //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success');
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      }
    );
  }

  //this.user
}
