import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsUsersComponent } from './subjects-users.component';

describe('SubjectsUsersComponent', () => {
  let component: SubjectsUsersComponent;
  let fixture: ComponentFixture<SubjectsUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectsUsersComponent]
    });
    fixture = TestBed.createComponent(SubjectsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
