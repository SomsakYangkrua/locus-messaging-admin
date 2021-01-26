import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserComponent } from './all-users.component';

describe('AllUserProfilesComponent', () => {
  let component: AllUserComponent;
  let fixture: ComponentFixture<AllUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
