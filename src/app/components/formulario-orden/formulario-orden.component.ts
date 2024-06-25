import { Component, inject } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-orden',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './formulario-orden.component.html',
  styleUrl: './formulario-orden.component.css'
})
export class FormularioOrdenComponent {
servicioProducto=inject(ProductosService)
servicio=inject(OrdenService)

productosRegistrado:any;

mesa:any;

ngOnInit(){
  this.servicioProducto.getProductos().subscribe(p=>{
    this.productosRegistrado=p;
  })
  
};

guardarMesa(formulario:NgForm){
  this.mesa=formulario.value.mesa;
}

productoCarrito:any;

registrar(item:any){
  console.log(item)
  console.log(this.mesa)
  this.crearProducto(item)
}
productoJson:any;

crearProducto(item:any){
  this.productoJson={
    mesa:this.mesa,
    producto:item.producto,
    precio:item.precio,
  }
  this.servicio.postOrden(this.productoJson).subscribe()
}
}
