import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterprofileComponent } from './recruiterprofile.component';

describe('RecruiterprofileComponent', () => {
  let component: RecruiterprofileComponent;
  let fixture: ComponentFixture<RecruiterprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
