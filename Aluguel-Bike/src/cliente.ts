import { Locador } from "./locador"

export class Cliente {
  private _saldo: number = 0.0
  nome: string
  cpf: number

  constructor(nome: string, cpf: number) {
    this.nome = nome
    this.cpf = cpf
  }

  credita(quantia: number): void {
    this._saldo += quantia
  }

  sacar(quantia: number): void {
    this._saldo -= quantia
  }

  aluga(locador: Locador, dias: number, numeroBike: number){
    if(this._saldo < dias*locador.diaria){
      console.log("Erro: Saldo insuficiente.")
    } else{
      locador.credita(dias*locador.diaria)
      this.sacar(dias*locador.diaria)
      console.log("Bike [", locador.bikes[numeroBike - 1].codigo, "] alugada com sucesso!\n")
    }
  }

  get saldo(): number {
    return this._saldo
  }
}