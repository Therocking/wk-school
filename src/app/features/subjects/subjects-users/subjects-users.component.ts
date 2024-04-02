import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISubjectUser } from 'src/app/core/models';
import { AuthService, SubjectsServiceUsers } from 'src/app/core/services';

@Component({
  selector: 'app-subjects-users',
  templateUrl: './subjects-users.component.html',
  styleUrls: ['./subjects-users.component.scss']
})
export class SubjectsUsersComponent {
  public subjects: ISubjectUser[] = []
  private subjectStudent: SubjectsServiceUsers
  private subjectTeacher: SubjectsServiceUsers

  constructor(
    private http: HttpClient,
    private router: Router,
    private routerActivated: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.subjectStudent = new SubjectsServiceUsers(http, "subjectsStudents")
    this.subjectTeacher = new SubjectsServiceUsers(http, "subjectsTeachers")
  }

  ngOnInit(): void {

    if (this.router.url.includes("/students")) {
      this.subjectStudent.getAll("usersId=" + this.authService.userPermisions?.id)
        .subscribe(subjects => {
          this.subjects = subjects
        })

      return
    }

    this.subjectTeacher.getAll("usersId=" + this.authService.userPermisions?.id)
      .subscribe(subjects => {
        this.subjects = subjects
      })
  }
}
