import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DisciplinaService } from '../disciplina.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router'
import { ProfessorComponent } from '../professor/professor.component';
import { professorService } from '../professor.service';
import { QrcodeComponent } from '../qrcode/qrcode.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  displayedColumns = ['id', 'logoUrl', 'professores','descricao', 'segmento', 'dataInicio', 'dataTermino', 'actions'];
  users:Array<Element>;
  dataSource = null;

  constructor(
    private service:DisciplinaService,
    private _router:Router, 
    public snackBar: MatSnackBar,
    private dialog: MatDialog,
    private professorService:professorService
  ) {
    
  }

  ngOnInit() {
    this.populateDataSource();
  }

  showQrCode(disciplina)
  {
   let dialogRef = this.dialog.open(QrcodeComponent, {
    data : {disciplina : disciplina}
   });
  }

  showProfessors(professors)
  {
    this.professorService.getAll().subscribe(response=>{
      let professorsFound = [];

      for(let id in professors){
        let found = response.findIndex(item => item.id == professors[id]);

        if(found != -1){
          professorsFound.push(response[found]);
        }
      }

      let dialogRef = this.dialog.open(ProfessorComponent, {
        data: {professores: professorsFound}
      });
    });
  }

  deleteDisciplina(id:number){
     return this.service.delete(id).subscribe(suc=> {
      this.populateDataSource();

      this.snackBar.open('Disciplina removida', 'Ok', {
        duration: 3000,
      });
    });
  }

  editDisciplina(id){
    this._router.navigate(['/main/disciplina/editar', id]);
  }

  private populateDataSource(){
    let list = this.service.getAll().subscribe(suc=>{
      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }
}