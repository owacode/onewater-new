import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoreChapterComponent } from './indore-chapter.component';

describe('IndoreChapterComponent', () => {
  let component: IndoreChapterComponent;
  let fixture: ComponentFixture<IndoreChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoreChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoreChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
