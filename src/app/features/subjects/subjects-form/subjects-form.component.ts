import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, ISubject } from 'src/app/core/models';
import { SubjectsServiceUsers, UsersService } from 'src/app/core/services';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'app-subjects-form',
  templateUrl: './subjects-form.component.html',
  styleUrls: ['./subjects-form.component.scss']
})
export class SubjectsFormComponent {
  private subjectStudent: SubjectsServiceUsers
  private subjectTeacher: SubjectsServiceUsers
  public teachers: IUser[] = []
  public subjects: ISubject[] = []

  public subjectForm = new FormGroup({
    userId: new FormControl(0, {nonNullable: true}),
    subjectId: new FormControl(0, {nonNullable: true})
  })

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UsersService,
    private subjectService: SubjectsService,
  ) {
    this.subjectStudent = new SubjectsServiceUsers(http, "subjectsStudents")
    this.subjectTeacher = new SubjectsServiceUsers(http, "subjectsTeachers")
  }

  ngOnInit(): void {
    this.userService.getAll("roleId=2&_limit=10&_sort=fullName")
      .subscribe(users => this.teachers = users)

      this.subjectService.getAll()
        .subscribe(subs => this.subjects = subs)
  }

  public onSubmit(): void {
    if(this.subjectForm.invalid) return

    const usersId = this.subjectForm.value.userId!
    const subjectsId = this.subjectForm.value.subjectId!

    if(this.router.url.includes("students")) {
      this.subjectStudent.create({id:2, usersId, subjectsId})
        .subscribe(() => {
          this.router.navigateByUrl("/subjects/students")
        })

        return
    }

    this.subjectTeacher.create({id:2, usersId, subjectsId})
      .subscribe(() => {
        this.router.navigateByUrl("/subjects/teachers")
      })
  }

}
