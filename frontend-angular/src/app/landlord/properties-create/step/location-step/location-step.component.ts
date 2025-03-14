import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LocationStepComponent} from './location-step.component';

describe('LocationStepComponent', () => {
  let component: LocationStepComponent;
  let fixture: ComponentFixture<LocationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});