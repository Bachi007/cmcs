import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinicipalComponent } from './prinicipal.component';

describe('PrinicipalComponent', () => {
  let component: PrinicipalComponent;
  let fixture: ComponentFixture<PrinicipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinicipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinicipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
