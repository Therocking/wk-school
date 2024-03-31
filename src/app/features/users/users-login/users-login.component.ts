import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent {
  public userForm = new FormGroup({
    username: new FormControl("", {nonNullable: true}),
    password: new FormControl("", {nonNullable: true})
  })

  constructor(
    private authService: AuthService,
    private router: Router,
    ){}

  public onLogin(): void {
    if(this.userForm.invalid) return

    const username = this.userForm.value.username!
    const password = this.userForm.value.password!
    
    this.authService.login(username, password)
      .subscribe(() => {
        this.router.navigateByUrl("/app")
      })
  }
}
