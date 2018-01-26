import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  mock:Array<any>;

  constructor() {
    this.mock = [
      {id: 1, nome: 'José da Silva', login: "jose", email: 'jose@ponto.com.br', perfil:"ALUNO"},
      {id: 2, nome: 'Mariano das Neves', login: "mariano", email: 'marino@ponto.com.br', perfil:"ALUNO"},
      {id: 3, nome: 'Magyver da Silva', login: "magyver", email: 'magyver@ponto.com.br', perfil:"ALUNO"},
      {id: 4, nome: 'Irineu Nunes', login: "irineu", email: 'irineu@ponto.com.br', perfil:"ALUNO"},
      {id: 5, nome: 'Carlos Silva', login: "carlos1", email: 'carlos@ponto.com.br', perfil:"ALUNO"}
    ]
  }

  getById(id){
    return this.mock.find(item => item.id == id);
  }

  getAll(){
    return this.mock;
  }

  save(user = null){
    if(user){
      let index = this.mock.find(item => item.id == user.id);

      if(index > -1){
        this.mock[index] = user;
      }
    }else{
      this.mock.push(user);
    }
  }

  delete(id)
  {
    let index = this.mock.find(item => item.id == id);

    if(index > -1){
      this.mock.splice(index,1);
    }
  }
}