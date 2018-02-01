import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresencaComponent } from './presenca/presenca.component';
import { RelatorioRouting } from './relatorio.routing';
import { RouterModule } from '@angular/router';
import { MatExpansionModule, MatAccordion, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDialogModule, MAT_DATE_LOCALE } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisciplinaService } from '../services/disciplina.service';
import { RelatorioService } from './relatorio.service';
import { ItemPresencaComponent } from './item-presenca/item-presenca.component';
import { AuthInterceptorService } from '../services/auth.interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule, 
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    HttpClientModule
  ],
  declarations: [PresencaComponent, ItemPresencaComponent],
  providers: [
    RelatorioService,
    DisciplinaService,
    FormBuilder,
    {provide:MAT_DATE_LOCALE, useValue: 'pt-br'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class RelatorioModule { }
