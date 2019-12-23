import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MscstudentsComponent } from './mscstudents.component';

describe('MscstudentsComponent', () => {
  let component: MscstudentsComponent;
  let fixture: ComponentFixture<MscstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MscstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MscstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
