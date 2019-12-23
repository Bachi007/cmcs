import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McomfmComponent } from './mcomfm.component';

describe('McomfmComponent', () => {
  let component: McomfmComponent;
  let fixture: ComponentFixture<McomfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McomfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McomfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
