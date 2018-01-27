import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MainRouting } from './main.routing';
import { RouterModule } from "@angular/router";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule, MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatGridListModule
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})
export class MainModule { }
