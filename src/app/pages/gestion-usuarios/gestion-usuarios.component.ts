import { Component } from '@angular/core';
import { TablaUsuariosComponent } from '../../components/tabla-usuarios/tabla-usuarios.component';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [TablaUsuariosComponent],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {

}
