import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class QrCodeService {
constructor(private http : HttpClient) {}

 getQrCode(disciplina){
   
  let key = btoa(JSON.stringify({
    id : disciplina.id,
    descricao : disciplina.descricao,
    segmento: disciplina.segmento
  }));
  return "https://chart.googleapis.com/chart?cht=qr&chl="+key+"&chs=207x207";
 }
}