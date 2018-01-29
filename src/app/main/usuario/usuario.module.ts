import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MatTableModule } from '@angular/material/table';
import { UsuarioRouting } from './usuario.routing';
import { ReactiveFormsModule, FormsModule, FormBuilder  } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { RouterModule } from "@angular/router";
import { MatOptionModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { UsuarioService } from './usuario.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRouting,
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
    MatSnackBarModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [FormBuilder, UsuarioService, HttpClient]
})
export class UsuarioModule { }
