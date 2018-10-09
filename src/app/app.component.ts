import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  demo;

  dataAtual = new Date();

  uploadedFiles: any[] = [];

  // https://github.com/amarkes/brmasker4

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'dinheiro': ['150.99', Validators.required],
      'peso': ['150.158', Validators.required],
      'telefone': ['4632251234', Validators.required],
      'telefoneCelular': ['46987654321', Validators.required],
      'telefoneFixo': ['4698765432', Validators.required]
    });
  }
}
