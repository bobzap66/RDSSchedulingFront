import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventPageComponent } from './update-event-page.component';

describe('UpdateEventPageComponent', () => {
  let component: UpdateEventPageComponent;
  let fixture: ComponentFixture<UpdateEventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEventPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
