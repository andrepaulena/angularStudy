import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  displayedColumns = ['id', 'nome', 'login', 'email', 'perfil', 'actions'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() {
    for(var i = 0; i < 5; i ++){
      var element = new User();
      var userId = i + 1; 

      element.id = userId;
      element.email = "teste" + userId + "@teste.com";
      element.login = "teste" + userId;
      element.nome = "Teste " + userId;
      element.perfil = i%2==0?"Admin":"Padrão";
  
      ELEMENT_DATA.push(element);
    }
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

export class User implements Element {
  id: number;
  nome: string;
  login: string;
  email: string;
  perfil: string;
}

const ELEMENT_DATA: Element[] = [];