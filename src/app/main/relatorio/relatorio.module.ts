import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresencaComponent } from './presenca/presenca.component';
import { RelatorioRouting } from './relatorio.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting
  ],
  declarations: [PresencaComponent]
})
export class RelatorioModule { }
