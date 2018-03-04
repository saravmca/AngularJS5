import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoutingListComponent } from './employee-routing-list.component';

describe('EmployeeRoutingListComponent', () => {
  let component: EmployeeRoutingListComponent;
  let fixture: ComponentFixture<EmployeeRoutingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoutingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoutingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
