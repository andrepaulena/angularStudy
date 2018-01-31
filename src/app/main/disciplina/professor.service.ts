import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class professorService {
  private url = environment.url+'/api/v1/usuarios';

  constructor(private http : HttpClient) {}

  getById(id){
    return this.http.get<any>(this.url+'/'+id);
    // return this.mock.find(item => item.id == id);
  }

  getAll() {
    let httpParams = new HttpParams().set('tipo',"PROFESSOR");
    return this.http.get<Array<any>>(this.url, {params:httpParams});
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