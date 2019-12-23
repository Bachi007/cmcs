import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbastudentsComponent } from './mbastudents.component';

describe('MbastudentsComponent', () => {
  let component: MbastudentsComponent;
  let fixture: ComponentFixture<MbastudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbastudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbastudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
