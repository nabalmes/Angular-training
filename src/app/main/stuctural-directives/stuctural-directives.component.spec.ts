import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StucturalDirectivesComponent } from './stuctural-directives.component';

describe('StucturalDirectivesComponent', () => {
  let component: StucturalDirectivesComponent;
  let fixture: ComponentFixture<StucturalDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StucturalDirectivesComponent]
    });
    fixture = TestBed.createComponent(StucturalDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
