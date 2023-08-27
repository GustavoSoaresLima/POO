import {Bike} from './bike'

export class Locador {
  private _saldo: number = 0.0
  nome: string
  bikes: Array<Bike>
  diaria: number

  constructor(nome: string, bikes: Array<Bike>, preco: number){
    this.nome = nome
    this.bikes = bikes
    this.diaria = preco
  }

  credita(valor: number): void{
    this._saldo += valor
  }

  sacar(quantia: number): void{
    this._saldo -= quantia
  }

  get saldo(): number {
    return this._saldo
  }

  listarBikes(): void{
    for(var i = 0; i < this.bikes.length; i++){
      console.log(i + 1, ":\n Marca: ", this.bikes[i].marca, "\n Código: ", this.bikes[i].codigo, "\n")
    }
  }
}