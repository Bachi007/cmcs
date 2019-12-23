import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McomrComponent } from './mcomr.component';

describe('McomrComponent', () => {
  let component: McomrComponent;
  let fixture: ComponentFixture<McomrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McomrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
