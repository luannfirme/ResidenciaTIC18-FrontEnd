import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrl: './form-template-driven.component.css'
})
export class FormTemplateDrivenComponent {
  
  onSubmit(formulario: NgForm){
    if(formulario.status == "INVALID"){
      alert("Formulário inválido !!")
      return;
    }
    
    let{login, senha } = formulario.value;
    console.log(login, senha);
  }

}
