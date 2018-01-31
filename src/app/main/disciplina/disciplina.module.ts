import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MatTableModule } from '@angular/material/table';
import { DisciplinaRouting } from './disciplina.routing';
import { ReactiveFormsModule, FormsModule, FormBuilder  } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { RouterModule } from "@angular/router";
import { MatOptionModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatSnackBarModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { DisciplinaService } from './disciplina.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { professorService } from './professor.service';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DisciplinaRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [
    FormBuilder, 
    DisciplinaService,
    professorService,
    HttpClient,
    {provide:MAT_DATE_LOCALE, useValue: 'pt-br'}
  ]
})
export class DisciplinaModule { }
