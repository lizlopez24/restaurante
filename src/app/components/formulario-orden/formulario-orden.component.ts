import { Component, inject } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-orden',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-orden.component.html',
  styleUrl: './formulario-orden.component.css'
})
export class FormularioOrdenComponent {
servicio=inject(OrdenService)
producto:any;
mesa:any;
precio:any;

registrar(formulario:NgForm){
  this.servicio.postOrden(formulario.value).subscribe()
  this.producto="";
  this.mesa="";
  this.precio=0;
}

}
