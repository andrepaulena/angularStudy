import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {
  form:FormGroup;

  constructor(
    private _formBuilder:FormBuilder
  ) {
    this.form = this._formBuilder.group({
      disciplina: [null,Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required]
    });
   }

  ngOnInit() {
  }

}
