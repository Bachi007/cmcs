import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MscComponent } from './msc.component';

describe('MscComponent', () => {
  let component: MscComponent;
  let fixture: ComponentFixture<MscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
