import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  displayedColumns = ['id', 'nome', 'login', 'email', 'perfil', 'actions'];
  users:Array<Element>;
  dataSource = null;

  constructor(private userService:UsuarioService) {
    this.dataSource = new MatTableDataSource<Element>(this.userService.getAll());
  }

  ngOnInit() {
  }
}

export interface Element {
  id: number;
  nome: string;
  login: string;
  email: string;
  perfil: string;
}

const ELEMENT_DATA: Element[] = [];