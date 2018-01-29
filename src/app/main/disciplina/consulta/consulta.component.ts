import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DisciplinaService } from '../disciplina.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  displayedColumns = ['id','instrutores','descricao', 'segmento', 'dataInicio', 'dataTermino', 'actions'];
  users:Array<Element>;
  dataSource = null;

  constructor(
    private service:DisciplinaService,
    private _router:Router, 
    public snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit() {
    this.populateDataSource();
  }

  deleteUser(id:number){
    return this.service.delete(id).subscribe(suc=> {
      this.populateDataSource();

      this.snackBar.open('Usuário removido', 'Ok', {
        duration: 3000,
      });
    });
  }

  editUser(id){
    this._router.navigate(['/main/disciplina/editar', id]);
  }

  private populateDataSource(){
    let list = this.service.getAll().subscribe(suc=>{
      console.log(suc);

      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }
}