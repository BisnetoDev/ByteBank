import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Output, EventEmitter } from '@angular/core';
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

  transferir()
  {
    console.log(">> Nova transferência requerida...");
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);
    const ValorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(ValorEmitir);
    this.limparCampos();
  }

  limparCampos()
  {
    this.valor = 0;
    this.destino = 0
  }
}
