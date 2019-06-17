import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { SearchingComponent } from '../searching/searching.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginvalue=[{name:"ani",password:12345}];

  name = new FormControl('', [Validators.required, ]);
  pass = new FormControl('', [Validators.required, ]);

  constructor(private router: Router) { }

  //router: Router;
  getErrorMessage(value) {
    return value.hasError('required') ? 'You must enter a value' :
        value.hasError('name') ? 'Not a valid name' :'';
  }
  //uname:string="";
 // upass:any="";
 // this.uname='model1';
  validate():void{
    if(this.name.value == this.loginvalue[0].name && this.pass.value == this.loginvalue[0].password)
    {
     this.router.navigate(['/searching']);
    }
    else
    {
      alert("user or name password is worng");
    }

  }

  ngOnInit()
   {

  }
}
