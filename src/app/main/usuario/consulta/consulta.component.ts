import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../usuario.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  displayedColumns = ['id', 'nome', 'login', 'email', 'perfil', 'actions'];
  users:Array<Element>;
  dataSource = null;

  constructor(
    private userService:UsuarioService,
    private _router:Router, 
    public snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit() {
    this.populateDataSource();
  }

  deleteUser(id:number){
    return this.userService.delete(id).subscribe(suc=> {
      this.populateDataSource();

      this.snackBar.open('Usuário removido', 'Ok', {
        duration: 3000,
      });
    });
  }

  editUser(id){
    this._router.navigate(['/main/usuario/editar', id]);
  }

  private populateDataSource(){
    let list = this.userService.getAll().subscribe(suc=>{
      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }
}