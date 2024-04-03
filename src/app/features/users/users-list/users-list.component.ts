import { Component } from '@angular/core';
import { IPermissions, IUser } from 'src/app/core/models';
import { UsersService, AuthService } from 'src/app/core/services';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  public fullName: string = ''
  public users: IUser[] = []
  constructor(
    private userservice: UsersService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userservice.getAll()
      .subscribe(users => this.users = users)
  }

  public get userPermisions() : IPermissions | undefined  {
    return this.authService.userPermisions
  }

  public filterUsers(): void {
    this.userservice.filterBy(this.fullName)
      .subscribe(users => this.users = users)
  }

  public deleteUser(id: number): void {
    this.userservice.delete(id)
      .subscribe(user => {
        this.users = this.users.map(u => {
          if(u.id === user.id) u = user

          return u
        })
      })
  }

  public showDeleteBtn(userActive: boolean): boolean {
    return this.userPermisions!.permissions.includes("teacher.delete") 
           && this.userPermisions!.permissions.includes("student.delete")
           && userActive
  }

}
