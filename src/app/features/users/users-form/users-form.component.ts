import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { IRole, IUser } from 'src/app/core/models';
import { UsersService, RolesService } from 'src/app/core/services';

@Component({
  selector: 'users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent {
  public roles: IRole[] = []

  constructor(
    private userService: UsersService,
    private rolesService: RolesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  public userForm = new FormGroup({
    id: new FormControl(0),
    fullName: new FormControl("", { nonNullable: true }),
    username: new FormControl(""),
    password: new FormControl(""),
    roleId: new FormControl(0)
  })

  ngOnInit(): void {
    this.rolesService.getAll()
      .subscribe(roles => this.roles = roles)

    if (!this.router.url.includes("edit")) return

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.userService.getById(id)),
      )
      .subscribe(hero => {
        if (!hero) this.router.navigateByUrl('/')

        this.userForm.reset(hero)
      })
  }

  public get currentUser(): IUser {
    const user = this.userForm.value as IUser

    return user
  }

  public onSubmit(): void {
    if (this.userForm.invalid) return

    if (this.currentUser.id) {
      this.userService.udpate(this.currentUser)
        .subscribe(() => {
          this.router.navigateByUrl("/")
        })

      return
    }

    this.currentUser.isActive = true
    this.userService.create(this.currentUser)
      .subscribe(hero => {
        return this.router.navigateByUrl("/")
      })
  }

  public goBack(): void {
    history.back()
  }
}
