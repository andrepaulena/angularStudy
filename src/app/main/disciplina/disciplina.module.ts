import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MatTableModule } from '@angular/material/table';
import { DisciplinaRouting } from './disciplina.routing';
import { ReactiveFormsModule, FormsModule, FormBuilder  } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { RouterModule } from "@angular/router";
import { MatOptionModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatSnackBarModule, MatNativeDateModule } from '@angular/material';
import { DisciplinaService } from './disciplina.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    MatNativeDateModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [FormBuilder, DisciplinaService, HttpClient]
})
export class DisciplinaModule { }
