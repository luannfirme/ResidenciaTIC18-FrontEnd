import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAtendimentoComponent } from './excluir-atendimento.component';

describe('ExcluirAtendimentoComponent', () => {
  let component: ExcluirAtendimentoComponent;
  let fixture: ComponentFixture<ExcluirAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
