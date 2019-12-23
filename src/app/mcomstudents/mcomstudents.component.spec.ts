import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McomstudentsComponent } from './mcomstudents.component';

describe('McomstudentsComponent', () => {
  let component: McomstudentsComponent;
  let fixture: ComponentFixture<McomstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McomstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McomstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
