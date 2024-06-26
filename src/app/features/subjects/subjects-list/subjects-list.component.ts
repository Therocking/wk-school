import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISubjectUser } from 'src/app/core/models';
import { SubjectsServiceUsers } from 'src/app/core/services';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent {
  public subjects: ISubjectUser[] = []
  private subjectStudent: SubjectsServiceUsers
  private subjectTeacher: SubjectsServiceUsers

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.subjectStudent = new SubjectsServiceUsers(http, "subjectsStudents"),
    this.subjectTeacher = new SubjectsServiceUsers(http, "subjectsTeachers")
  }

  ngOnInit() {
    if (this.router.url.includes("/students")) {
      this.subjectStudent.getAll()
        .subscribe(subjects => {
          this.subjects = subjects
        })

        return
    }
    
    this.subjectTeacher.getAll()
      .subscribe(subjects => {
        this.subjects = subjects
      })
  }
}