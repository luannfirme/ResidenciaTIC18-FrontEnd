import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model-driven',
  templateUrl: './form-model-driven.component.html',
  styleUrl: './form-model-driven.component.css'
})
export class FormModelDrivenComponent implements OnInit {
  aulaForm: FormGroup;

  constructor() {
    this.aulaForm = new FormGroup({
      'Nome': new FormControl(null, Validators.required),
      'Email': new FormControl(null, Validators.email),
      'Localizacao': new FormControl(null, Validators.required),
      'Status': new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    console.log(this.aulaForm);
    console.log(this.aulaForm.value);
  }
}
