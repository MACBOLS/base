import { Component } from '@angular/core';
import Almacen from './tarea';
import { producto } from './tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'base-app';
}

//#region variables
// let nombre: string = "Marce";
// let ahorros: number = 500;
// console.log(nombre, ahorros);
//#endregion

//#region arreglos
// let pasatimepos : (string | number)[] = ['caminar', 'correr', 'tocar'];

// pasatimepos.push('ajedrez');
// pasatimepos.push('5');
// console.log(pasatimepos);

// const edad: number [] = [5,6,5]
// console.log(edad);
//#endregion

//#region Interfaces
// interface Estudiante{
//   nombre: string,
//   apPaterno: string,
//   codigo: string,
//   pension: number,
//   matriculado: boolean,
//   pasatimepos: string[]
//   escuela?: string,
// }
//#endregion

//#region Arreglos
// let alumno = {
//   nombre: 'Juan',
//   apPAterno: 'García',
//   codigo: '018200684',
//   pension: 850,
//   matriculado: true,
//   pasatimepos:['futbol', 'basket']
// }
// console.log(alumno);
// console.table(alumno);
//#endregion

//#region Fuciones (básicos)
// function sumar(a: string, b: string): string {
//   return a + b;
// }

// function mostrar(valor: any): void {
//   console.log(valor);
// }

// let resultado = sumar('juan', 'perez');
// console.log(resultado);

// mostrar(resultado);

// const sumarF = (a: number, b: number): number => {
//   return a + b;
// };

// //operadores flecha
// const mostrarF = (valor: any): void => console.log(valor);

// mostrar(sumarF(7, 8));
// mostrarF(sumarF(7, 8));
//#endregion

//#region Funciones (+pro)
// interface Cliente {
//   nombre: string;
//   apellido: string;
//   cuenta: Cuenta;
//   movimiento: (valor: number) => void;
// }

// interface Cuenta {
//   agencia: string;
//   saldo: number;
// }

// const agencia01: Cliente = {
//   nombre: 'Juan',
//   apellido:'Perez',
//   cuenta: {
//     agencia: '01',
//     saldo: 1500
//   },
//   movimiento(valor: number){
//     this.cuenta.saldo += valor;
//   }
// }

//Método para deposita
// function deposito(cantidad:number, cuenta:Cuenta):void {
//   cuenta.saldo += cantidad;
// }

// deposito(500, agencia01.cuenta);

//console.table(agencia01);
//#endregion

//#region tarea
//Define an interface to standardize and reuse your object
// interface Product {
//   name: string;
//   price: number;
//   stock: number;
// }

// let papa: Product = {
// name: "Papa",
// price: 1.43,
// stock: 20
// }

// let tomate: Product = {
//   name: "tomate",
//   price: 2.5,
//   stock: 10
// }

// let products: Product[] = [];
// products.push(papa);
// products.push(tomate);
// //...do other products.push(_) to add more objects...
// console.table(products);
//#endregion

//#region tarea

//PRODUCTOS

const p1: producto = {
  codigo: 'P_01',
  nombre: 'Papa',
  stock: 20,
  cambioStock(valor: number) {
    this.stock = valor;
  },
};

const p2: producto = {
  codigo: 'P_02',
  nombre: 'Camote',
  stock: 10,
  cambioStock(valor: number) {
    this.stock = valor;
  },
};

const p3: producto = {
  codigo: 'P_03',
  nombre: 'Cebolla',
  stock: 5,
  cambioStock(valor: number) {
    this.stock = valor;
  },
};

const p4: producto = {
  codigo: 'P_04',
  nombre: 'Tomate',
  stock: 10,
  cambioStock(valor: number) {
    this.stock = valor;
  },
};

//ALMACENES

const A_01: Almacen = new Almacen(
  'Almacen1',
  'A_01',
  'Primer Almacen del WareHouse',
  []
);

const A_02: Almacen = new Almacen(
  'Almacen2',
  'A_02',
  'Segundo Almacen del WareHouse',
  []
);

console.table(A_01);
console.table(A_02);

//Ponemos los productos en los almacenes
A_01.ingresarProducto(p1);
A_01.ingresarProducto(p2);
A_01.ingresarProducto(p3);

A_02.ingresarProducto(p1);
A_02.ingresarProducto(p2);
A_02.ingresarProducto(p4);

A_01.mostrarProducto();
A_02.mostrarProducto();


//CONSULTAS
//Cambio de Stock
p1.cambioStock(20);
p3.cambioStock(40);

//lectura de Almacenes
A_01.mostrarProducto();
A_02.mostrarProducto();

//Mover productos
A_01.moverProducto(p3, A_02);
A_02.mostrarProducto();

//Remover el producto del almacen
A_02.quitarProducto(p1);
