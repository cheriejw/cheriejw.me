import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSubscreenComponent } from './selected-subscreen.component';

describe('SelectedSubscreenComponent', () => {
  let component: SelectedSubscreenComponent;
  let fixture: ComponentFixture<SelectedSubscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedSubscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSubscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
