import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerappliedlistComponent } from './jobseekerappliedlist.component';

describe('JobseekerappliedlistComponent', () => {
  let component: JobseekerappliedlistComponent;
  let fixture: ComponentFixture<JobseekerappliedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerappliedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerappliedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
