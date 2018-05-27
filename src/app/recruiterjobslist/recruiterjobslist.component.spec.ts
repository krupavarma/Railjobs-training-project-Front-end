import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterjobslistComponent } from './recruiterjobslist.component';

describe('RecruiterjobslistComponent', () => {
  let component: RecruiterjobslistComponent;
  let fixture: ComponentFixture<RecruiterjobslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterjobslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterjobslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
