import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianBoardComponent } from './indian-board.component';

describe('IndianBoardComponent', () => {
  let component: IndianBoardComponent;
  let fixture: ComponentFixture<IndianBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
