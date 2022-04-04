import { HttpClient } from '@angular/common/http';
import { TransferenciaService } from './../services/transferencia.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}
  //constructor(private service: TransferenciaService) {}

  transferir()
  {
    console.log(">> Nova transferência requerida...");
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);
    // const ValorEmitir = { valor: this.valor, destino: this.destino };
    // this.aoTransferir.emit(ValorEmitir);
    const ValorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(ValorEmitir)
    .subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
    );
  }

  limparCampos()
  {
    this.valor = 0;
    this.destino = 0
  }
}
