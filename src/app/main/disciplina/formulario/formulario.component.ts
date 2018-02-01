import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualsFieldValidator } from '../../../validators/equals-field-validator.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { professorService } from '../professor.service';
import * as moment from 'moment';
import { DisciplinaService } from '../../services/disciplina.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  public professores = [];
 
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
    public snackBar: MatSnackBar,
    private _router:Router,
    private professorService:professorService,
    private service:DisciplinaService
  ) {
    this.form = this.fb.group({
      id: '',
      descricao: ['', Validators.required ],
      professores: ['',this.fb.array([]) ],
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

    this.professorService.getAll().subscribe(response=>{
     this.professores = response;

      if(this.id) {
          this.service.getById(this.id).subscribe(response=>{
            let professores = [];

            for(let id in response.professores){
              let found = this.professores.findIndex(item => item.id == response.professores[id]);

              if(found != -1){
                professores.push(this.professores[found]);
              }
            }

            response.professores = professores;
            this.form.setValue(response);
          });
      }
    });
  }

  removeProfessor(id){
    let value = this.form.get('professores').value;
    let index = value.findIndex(item => item.id == id);

    value.splice(index,1);

    this.form.controls.professores.setValue(value);
  }

  notFound(event){
    event.target.src = 'https://img.meutimao.com.br/_upload/forumtopico/2015/12/06/faustao-erroujpg.jpg'
  }

  sendForm() {
    if(this.form.controls.professores.value.length < 2){
      this.snackBar.open('A disciplina deve ter pelo menos 2 professores', 'Ok', {
        duration: 3000,
      });
      
      return;
    }

    if(this.form.invalid){
      return;
    }

    let value = this.form.value;
    value.dataInicio = moment(value.dataInicio).format('YYYY-MM-DD');
    value.dataTermino = moment(value.dataTermino).format('YYYY-MM-DD');
    value.professores = value.professores.map(professor=>{
      return professor.id;
    });

    this.service.save(value).subscribe(
      response => {
        let message = 'Disciplina criada com sucesso';

        if(this.form.value.id){
          message = 'Disciplina editada com sucesso';
        }

        this.snackBar.open(message, 'Ok', {
          duration: 3000,
        });

        this.form.reset();
        this._router.navigate(['/main/disciplina/consulta']);
      }
    );
  }
}

