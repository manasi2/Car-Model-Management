import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelCreateComponent } from './car-model-create.component';

describe('CarModelCreateComponent', () => {
  let component: CarModelCreateComponent;
  let fixture: ComponentFixture<CarModelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarModelCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarModelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
