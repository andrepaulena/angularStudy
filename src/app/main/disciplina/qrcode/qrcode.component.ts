import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QrCodeService } from '../qrCode.service';

@Component({
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {
  qrCode = '';
  disciplina = null;

  constructor(
    public dialogRef: MatDialogRef<QrcodeComponent>,
    private qrCodeService:QrCodeService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.disciplina = data.disciplina;
      this.disciplina.data = new Date();
    }

  ngOnInit() {
    this.qrCode = this.qrCodeService.getQrCode(this.qrCodeService.getQrCode(this.disciplina))
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
