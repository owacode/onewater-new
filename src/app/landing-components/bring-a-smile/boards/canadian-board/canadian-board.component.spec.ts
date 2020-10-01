import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadianBoardComponent } from './canadian-board.component';

describe('CanadianBoardComponent', () => {
  let component: CanadianBoardComponent;
  let fixture: ComponentFixture<CanadianBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadianBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadianBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
