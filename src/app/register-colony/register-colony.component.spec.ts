import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterColonyComponent } from './register-colony.component';

describe('RegisterColonyComponent', () => {
  let component: RegisterColonyComponent;
  let fixture: ComponentFixture<RegisterColonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterColonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterColonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
