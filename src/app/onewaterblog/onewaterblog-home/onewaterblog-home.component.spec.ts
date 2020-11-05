import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaterblogHomeComponent } from './onewaterblog-home.component';

describe('OnewaterblogHomeComponent', () => {
  let component: OnewaterblogHomeComponent;
  let fixture: ComponentFixture<OnewaterblogHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewaterblogHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewaterblogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
