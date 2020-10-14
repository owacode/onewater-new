import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucknowChapterComponent } from './lucknow-chapter.component';

describe('LucknowChapterComponent', () => {
  let component: LucknowChapterComponent;
  let fixture: ComponentFixture<LucknowChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucknowChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucknowChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
