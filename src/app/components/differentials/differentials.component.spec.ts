import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentialsComponent } from './differentials.component';

describe('DifferentialsComponent', () => {
  let component: DifferentialsComponent;
  let fixture: ComponentFixture<DifferentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
