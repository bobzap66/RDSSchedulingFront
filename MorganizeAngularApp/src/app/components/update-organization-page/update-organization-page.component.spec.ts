import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizationPageComponent } from './update-organization-page.component';

describe('UpdateOrganizationPageComponent', () => {
  let component: UpdateOrganizationPageComponent;
  let fixture: ComponentFixture<UpdateOrganizationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrganizationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
