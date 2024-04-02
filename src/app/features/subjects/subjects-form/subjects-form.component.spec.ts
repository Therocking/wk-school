import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsFormComponent } from './subjects-form.component';

describe('SubjectsFormComponent', () => {
  let component: SubjectsFormComponent;
  let fixture: ComponentFixture<SubjectsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectsFormComponent]
    });
    fixture = TestBed.createComponent(SubjectsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
