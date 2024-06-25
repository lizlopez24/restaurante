import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-menu',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './formulario-menu.component.html',
  styleUrl: './formulario-menu.component.css'
})
export class FormularioMenuComponent {
  servicio=inject(ProductosService)
  router = inject(Router);
  producto:any;
  precio:any;
  imagen:any;
  id:any;

  guardar(formulario:any){
    this.servicio.putProducto(formulario.value).subscribe()
    this.router.navigate(['regOrden']);
  }
}
