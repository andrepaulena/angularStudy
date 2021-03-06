import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualsFieldValidator } from '../../../validators/equals-field-validator.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material';

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

  id:number;
  form:FormGroup;

  constructor(
    private fb: FormBuilder,
    private _routerActive:ActivatedRoute,
    private userService:UsuarioService,
    public snackBar: MatSnackBar,
    private _router:Router
  ) {
    this.form = this.fb.group({
      id: '',
      nome: ['', Validators.required ],
      login: ['', Validators.required ],
      perfil : ['', Validators.required ],
      email: ['', [Validators.email] ],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmacao: ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: EqualsFieldValidator.validate("senha", "confirmacao")});
  }

  ngOnInit() {
    this._routerActive.params.subscribe(params=>{
      this.id = params['id'];
    });

    if(this.id){
      this.userService.getById(this.id).subscribe(response=>{
        response.senha = null;
        response.confirmacao = null;
        delete response.urlFoto;
        this.form.controls.senha.setValidators(null);
        this.form.controls.confirmacao.setValidators(null);
        this.form.setValue(response);
      });
    }
  }

  sendForm() {
    if(this.form.invalid){
      return;
    }

    this.userService.save(this.form.value).subscribe(
      response => {
        let message = 'Usuário criado com sucesso';

        if(this.form.value.id){
          message = 'Usuário editado com sucesso';
        }

        this.snackBar.open(message, 'Ok', {
          duration: 3000,
        });

        this.form.reset();
        this._router.navigate(['/main/usuario/consulta']);

        this._router.navigate(['/main/usuario/consulta']);
      });
  }
}

