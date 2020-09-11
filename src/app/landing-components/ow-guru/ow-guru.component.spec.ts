import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwGuruComponent } from './ow-guru.component';

describe('OwGuruComponent', () => {
  let component: OwGuruComponent;
  let fixture: ComponentFixture<OwGuruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwGuruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwGuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
