import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-editar-orden',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-orden.component.html',
  styleUrl: './editar-orden.component.css'
})
export class EditarOrdenComponent {

  id: any;
  mesa: any;
  producto: any;
  precio: any;

  servicio = inject(OrdenService)

  editar(datos: any){
    this.servicio.putOrden(datos.value).subscribe()

  }
}
