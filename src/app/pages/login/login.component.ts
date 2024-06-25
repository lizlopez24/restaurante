import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio=inject(LoginService)
  email:any;
  password:any;
  rol:any;

  login(formulario:any){
    this.servicio.postLogin(formulario.value).subscribe(p=>{
      this.rol=p.user.rol
      localStorage.setItem("rol", this.rol)
      window.location.href='home'
    });

  }
}
