import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})

export class FormRegisterComponent {
  registerForm: FormGroup;

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      url: ['', [Validators.required, Validators.pattern("/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/")]],
      contrasena: ['', Validators.required],
      repetirContrasena: ['', Validators.required]
    });
  }
}
