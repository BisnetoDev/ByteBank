import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listatransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listatransferencia = [];
}

get transferencias(){
  return this.listatransferencia;
}

todas(): Observable<Transferencia[]>{
// todas(){
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionar(transferencia: Transferencia): Observable<Transferencia>{
  this.hidratar(transferencia);
  // this.listatransferencia.push(transferencia);
  return this.httpClient.post<Transferencia>(this.url, transferencia);
}

private hidratar(transferencia: any){
  transferencia.data = new Date();
}

}
