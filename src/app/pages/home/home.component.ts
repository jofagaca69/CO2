import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{
  public titulos: Array<any> = [
    {
      titulo: 'Compromiso',
      descripcion:
        'Fundamentado en valores que demuestren nuestra responsabilidad en brindar un óptimo servicio generado la satisfacción de nuestros clientes, proveedores y socios',
      src: 'assets/images/home/carrousel/img4.webp'
      },
    {
      titulo: 'Resumen',
      descripcion: 'Importaciones de distintos productos  a nivel internacional para luego su comercialización y venta en el mercado nacional así como también en el mercado exterior',
      src: 'assets/images/home/carrousel/img5.webp'
    },
    {
      titulo: 'Exportación',
      descripcion: 'Comercializar y vender productos colombianos en el exterior, los cuales fueron adquiridos en el mercado interno',
      src: 'assets/images/home/carrousel/img6.webp'
    }
  ];


  constructor() {
    this.asignarTitulo()
  }

  asignarTitulo(): void{

    console.log({selector: 'main'});

  }


}
