import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFundooComponent } from './input-fundoo.component';

describe('InputFundooComponent', () => {
  let component: InputFundooComponent;
  let fixture: ComponentFixture<InputFundooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFundooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFundooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
