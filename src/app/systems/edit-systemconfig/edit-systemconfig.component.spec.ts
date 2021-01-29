import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSystemconfigComponent } from './edit-systemconfig.component';

describe('EditSystemconfigComponent', () => {
  let component: EditSystemconfigComponent;
  let fixture: ComponentFixture<EditSystemconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSystemconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSystemconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
