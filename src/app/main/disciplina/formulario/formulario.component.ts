import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualsFieldValidator } from '../../../validators/equals-field-validator.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  public instrutores = [
    { id: 1, nome: 'Bátima' },
    { id: 2, nome: 'Irineu' },
    { id: 3, nome: 'Bill' }
  ];

  public segmentos = [
    { id: "FRONTEND", nome: 'Frontend' },
    { id: "BACKEND", nome: 'Backend' },
    { id: "MOBILE", nome: 'Mobile' },
  ];

  id:number;
  form:FormGroup;

  constructor(
    private fb: FormBuilder,
    private _routerActive:ActivatedRoute,
    private userService:DisciplinaService,
    public snackBar: MatSnackBar,
    private _router:Router
  ) {
    this.form = this.fb.group({
      id: '',
      descricao: ['', Validators.required ],
      instrutores: ['',this.fb.array([]) ],
      dataInicio : ['', Validators.required ],
      dataTermino: ['', Validators.required ],
      segmento: ['', Validators.required ],
      urlLogo: [''],
    });
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
        this._router.navigate(['/main/Disciplina/consulta']);

        this._router.navigate(['/main/Disciplina/consulta']);
      });
  }
}

