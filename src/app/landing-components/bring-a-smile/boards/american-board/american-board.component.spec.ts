import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanBoardComponent } from './american-board.component';

describe('AmericanBoardComponent', () => {
  let component: AmericanBoardComponent;
  let fixture: ComponentFixture<AmericanBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
