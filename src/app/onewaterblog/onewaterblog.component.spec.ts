import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaterblogComponent } from './onewaterblog.component';

describe('OnewaterblogComponent', () => {
  let component: OnewaterblogComponent;
  let fixture: ComponentFixture<OnewaterblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewaterblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewaterblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
