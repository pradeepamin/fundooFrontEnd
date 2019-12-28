import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashhComponent } from './dashh.component';

describe('DashhComponent', () => {
  let component: DashhComponent;
  let fixture: ComponentFixture<DashhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
