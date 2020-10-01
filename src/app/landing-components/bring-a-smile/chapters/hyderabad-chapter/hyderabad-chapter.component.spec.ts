import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyderabadChapterComponent } from './hyderabad-chapter.component';

describe('HyderabadChapterComponent', () => {
  let component: HyderabadChapterComponent;
  let fixture: ComponentFixture<HyderabadChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyderabadChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyderabadChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
