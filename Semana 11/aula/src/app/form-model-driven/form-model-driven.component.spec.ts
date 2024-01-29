import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModelDrivenComponent } from './form-model-driven.component';

describe('FormModelDrivenComponent', () => {
  let component: FormModelDrivenComponent;
  let fixture: ComponentFixture<FormModelDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormModelDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
