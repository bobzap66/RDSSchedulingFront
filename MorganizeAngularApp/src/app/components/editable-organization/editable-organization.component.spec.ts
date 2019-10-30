import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableOrganizationComponent } from './editable-organization.component';

describe('EditableOrganizationComponent', () => {
  let component: EditableOrganizationComponent;
  let fixture: ComponentFixture<EditableOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
