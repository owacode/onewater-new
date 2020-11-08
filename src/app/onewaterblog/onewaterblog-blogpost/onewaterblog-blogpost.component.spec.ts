import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaterblogBlogpostComponent } from './onewaterblog-blogpost.component';

describe('OnewaterblogBlogpostComponent', () => {
  let component: OnewaterblogBlogpostComponent;
  let fixture: ComponentFixture<OnewaterblogBlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewaterblogBlogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewaterblogBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
