import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {
  servicio=inject(LoginService)
  email:any;
  password:any;
  rol:any;
  nombre:any;

  registrar(formulario:NgForm){
    this.servicio.postUser(formulario.value).subscribe()
  }
}
