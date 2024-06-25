import { Component, inject } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-formulario-orden',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-orden.component.html',
  styleUrl: './formulario-orden.component.css'
})
export class FormularioOrdenComponent {
servicioProducto=inject(ProductosService)
servicio=inject(OrdenService)

productosRegistrado:any;

producto:any;
mesa:any;
precio:any;

ngOnInit(){
  this.servicioProducto.getProductos().subscribe(p=>{
    this.productosRegistrado=p;
  })
  
};



registrar(formulario:NgForm){
  this.servicio.postOrden(formulario.value).subscribe()
  this.producto="";
  this.mesa="";
  this.precio=0;
}

}
