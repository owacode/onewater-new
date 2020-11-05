import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaterblogCategoryComponent } from './onewaterblog-category.component';

describe('OnewaterblogCategoryComponent', () => {
  let component: OnewaterblogCategoryComponent;
  let fixture: ComponentFixture<OnewaterblogCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewaterblogCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewaterblogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
