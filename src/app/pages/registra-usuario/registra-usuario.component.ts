import { Component } from '@angular/core';
import { FormularioUsuarioComponent } from '../../components/formulario-usuario/formulario-usuario.component';

@Component({
  selector: 'app-registra-usuario',
  standalone: true,
  imports: [FormularioUsuarioComponent],
  templateUrl: './registra-usuario.component.html',
  styleUrl: './registra-usuario.component.css'
})
export class RegistraUsuarioComponent {

}
