export interface producto {
  codigo: string;
  nombre: string;
  stock: number;
  cambioStock(valor: number): void;
}

// ALMACEN
export default class Almacen {
  constructor(
    private nombre: string,
    private numero: string,
    private descripcion: string,
    private productos: producto[]
  ) {}

  public ingresarProducto(P: producto) {
    this.productos.push(P);
  }

  public mostrarProducto() {
    console.log(
      '\nnombre Almacen:' + this.nombre + '\ncodigo del almacen: ' + this.numero
    );
    this.productos.forEach(function (elemento, indice, array) {
      console.table(elemento);
    });
  }

  private buscarProducto(codP: producto) {
    let found = false;
    let position = -1;
    let index = 0;

    while (!found && index < this.productos.length) {
      if (this.productos[index] == codP) {
        found = true;
        position = index;
      } else {
        index += 1;
      }
    }
    return position;
  }

  private quitarProducto(codP: producto) {
    let posicion = this.buscarProducto(codP);
    this.productos.splice(posicion, 1);
  }

  public moverProducto(codP: producto, codA: Almacen) {
    let posicion = this.buscarProducto(codP);
    if (posicion == -1) {
      console.log('Producto no habido en almacen');
    } else {
      codA.ingresarProducto(this.productos[posicion]);
      this.quitarProducto(codP);
      console.log('Accion Exitosa');
    }
  }
}
