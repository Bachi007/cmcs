import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McastudentsComponent } from './mcastudents.component';

describe('McastudentsComponent', () => {
  let component: McastudentsComponent;
  let fixture: ComponentFixture<McastudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McastudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McastudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
