import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableEventComponent } from './editable-event.component';

describe('EditableEventComponent', () => {
  let component: EditableEventComponent;
  let fixture: ComponentFixture<EditableEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
