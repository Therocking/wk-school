import { Component } from '@angular/core';
import { ISubject } from 'src/app/core/models';
import { SubjectsService } from 'src/app/core/services';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent {
  public subjects: ISubject[] = []

  constructor(
    private subjectService: SubjectsService,
  ) { }

  ngOnInit() {
    this.subjectService.getAll()
      .subscribe(subjects => {
        this.subjects = subjects
      })
  }

}