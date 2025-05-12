import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCoursesComponent } from './gym-courses.component';

describe('GymCoursesComponent', () => {
  let component: GymCoursesComponent;
  let fixture: ComponentFixture<GymCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
