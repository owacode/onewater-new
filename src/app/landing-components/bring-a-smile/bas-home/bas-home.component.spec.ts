import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasHomeComponent } from './bas-home.component';

describe('BasHomeComponent', () => {
  let component: BasHomeComponent;
  let fixture: ComponentFixture<BasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
