import { Component } from '@angular/core';
import {HomeService} from "../shared/home.service";

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent {


  public selectedValue: string = "";

  public nombre: string = "Producto 01";
  public descripcion: string = "descripción 01";
  public precio: string = "100";
  public stock: string = "10";
  public codigo: string = "25250115";

  array_productos = [
    {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      Stock: this.stock,
      codigo: this.codigo
    }
  ];


  constructor(
    private productoService: HomeService
  ) {
  }
  guardar(){

    let dataProducto = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      Stock: this.stock,
      codigo: this.codigo
    };

    this.productoService.saveProducto(dataProducto).subscribe(
      data => {
        console.log(data)
      },error=>{
        console.log(error)
    }
    )


    console.log(dataProducto)

  }

  mostrar(){

    this.productoService.getProductos().subscribe(
      data => {
        // @ts-ignore
        this.array_productos = data;
        console.log(data)
      },error=>{
        console.log(error)
      }
    )

  }
}
