import { Locador } from "./locador"
import { Cliente } from "./cliente"
import {Bike} from './bike'

const monark = new Bike('Monark', 'abc123')
const caloi = new Bike('Caloi', 'def456')
console.log(monark)
console.log(caloi)

const zebikes = new Locador('Zé Bikes', [monark, caloi], 35.0)

zebikes.listarBikes()
console.log('Saldo de Zé Bikes: ', zebikes.saldo)

const humberto= new Cliente('Humberto Matias', 125489653)

humberto.credita(150)

humberto.aluga(zebikes, 5, 2)
console.log('Saldo de Humberto: ', humberto.saldo)
console.log('Saldo de Zé Bikes: ', zebikes.saldo)

humberto.aluga(zebikes, 3, 2)
console.log('Saldo de Humberto: ', humberto.saldo)
console.log('Saldo de Zé Bikes: ', zebikes.saldo)

zebikes.sacar(50)
humberto.sacar(20)
console.log('Saldo de Humberto: ', humberto.saldo)
console.log('Saldo de Zé Bikes: ', zebikes.saldo)
