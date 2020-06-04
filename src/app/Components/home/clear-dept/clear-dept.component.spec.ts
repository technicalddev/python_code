import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearDeptComponent } from './clear-dept.component';

describe('ClearDeptComponent', () => {
  let component: ClearDeptComponent;
  let fixture: ComponentFixture<ClearDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClearDeptComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
