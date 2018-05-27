import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerslistComponent } from './jobseekerslist.component';

describe('JobseekerslistComponent', () => {
  let component: JobseekerslistComponent;
  let fixture: ComponentFixture<JobseekerslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
