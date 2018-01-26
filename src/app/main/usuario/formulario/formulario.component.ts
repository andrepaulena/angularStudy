import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualsFieldValidator } from '../../../validators/equals-field-validator.validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  public perfis = [
    { id: "PROFESSOR", descricao: 'Professor' },
    { id: "ADMINISTRADOR", descricao: 'Administrador' },
    { id: "ALUNO", descricao: 'Aluno' },
  ];

  form:FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required ],
      login: ['', Validators.required ],
      perfil : ['', Validators.required ],
      email: ['', [Validators.email] ],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmacao: ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: EqualsFieldValidator.validate("senha", "confirmacao")});
  }

  ngOnInit() {
    
  }

  sendForm() {
    if(this.form.invalid){
      return;
    }
    
    console.log(this.form);
  }
}

