import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaService } from '../../services/disciplina.service';
import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {
  filtred = false;
  relatorio = [];
  disciplinas = [];
  disciplina = null;
  form:FormGroup;

  constructor(
    private _formBuilder:FormBuilder,
    private disciplinaService:DisciplinaService,
    private relatorioService:RelatorioService
  ) {
    this.form = this._formBuilder.group({
      disciplina: [null,Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required]
    });
   }

  ngOnInit() {
    this.disciplinaService.getAll().subscribe(response => {
      this.disciplinas = response;
    });
  }

  gerarRelatorio (){
    this.filtred = false;

    this.disciplinaService.getById(this.form.value.disciplina).subscribe(disciplina => {
      this.disciplina = disciplina;

      this.relatorioService.listarPresencaPorDisciplina(this.form.value).subscribe(
        response => {
          if(response.length){
            this.relatorio = response;
            this.filtred = true;
          }
        }
      )
    });

    
  }
}