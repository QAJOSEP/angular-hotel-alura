import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHuespedComponent } from './registro-huesped.component';

describe('RegistroHuespedComponent', () => {
  let component: RegistroHuespedComponent;
  let fixture: ComponentFixture<RegistroHuespedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroHuespedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroHuespedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
