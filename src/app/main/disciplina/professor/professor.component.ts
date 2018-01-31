import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProfessorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
