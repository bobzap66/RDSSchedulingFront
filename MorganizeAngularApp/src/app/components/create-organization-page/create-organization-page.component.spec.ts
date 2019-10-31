import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizationPageComponent } from './create-organization-page.component';

describe('CreateOrganizationPageComponent', () => {
  let component: CreateOrganizationPageComponent;
  let fixture: ComponentFixture<CreateOrganizationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrganizationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
