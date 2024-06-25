import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  servicio=inject(ProductosService)
  producto:any;
  precio:any;
  imagen:any;
  guardar(formulario:any){
    this.servicio.postProductos(formulario.value).subscribe()
  }
}
