import { Component } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
export class LoginComponent {
  //make an signup object
  nameAndPhone: any = {
    name: "",
    phone: "",
  };
 
  constructor(private profileService: ProfileService) { }
  
  //user signup
  register() {
    console.log(this.nameAndPhone)
    this.profileService.registerUser(this.nameAndPhone).subscribe(data => {
      if (data.status) {
        window.alert("user created")
      } else {
        window.alert("creation error")
      }
      console.log(data)
    })
  }

  
}
