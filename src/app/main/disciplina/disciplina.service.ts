import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DisciplinaService {
  private url = environment.url+'/api/v1/disciplinas';
  
  mock:Array<any>;

  constructor(private http : HttpClient) {
    this.mock = [
      {id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil:"ALUNO"},
      {id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil:"ALUNO"},
      {id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil:"ALUNO"},
      {id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil:"ALUNO"},
      {id: 5, nome: 'Carlos Silva', login: "carlos1", email: 'carlos@ponto.com.br', perfil:"ALUNO"}
    ]
  }

  getById(id){
    return this.http.get<any>(this.url+'/'+id);
    // return this.mock.find(item => item.id == id);
  }

  getAll(){
    return this.http.get<Array<any>>(this.url);
    // return this.mock;
  }

  save(user){
    if(user.id){
      return this.http.put(this.url+'/'+user.id, user, {responseType: 'text'});

      // let index = this.mock.findIndex(item => item.id == user.id);

      // if(index > -1){
      //   this.mock[index] = user;
      // }
    }else{
      return this.http.post(this.url, user, {responseType: 'text'});

      // user.id = this.mock.length + 1;
      // this.mock.push(user);
    }
  }

  delete(id){
    return this.http.delete(this.url+'/'+id, {responseType: 'text'});

    // let index = this.mock.findIndex(item => item.id == id);

    // if(index > -1){
    //   this.mock.splice(index,1);
    // }
  }
}