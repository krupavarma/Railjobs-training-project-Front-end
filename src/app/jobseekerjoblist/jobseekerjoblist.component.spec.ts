import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerjoblistComponent } from './jobseekerjoblist.component';

describe('JobseekerjoblistComponent', () => {
  let component: JobseekerjoblistComponent;
  let fixture: ComponentFixture<JobseekerjoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerjoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerjoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
