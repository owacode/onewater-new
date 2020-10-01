import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgartalaChapterComponent } from './agartala-chapter.component';

describe('AgartalaChapterComponent', () => {
  let component: AgartalaChapterComponent;
  let fixture: ComponentFixture<AgartalaChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgartalaChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgartalaChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
