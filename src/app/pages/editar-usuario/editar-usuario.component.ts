import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  servicio=inject(LoginService)
  ruta=inject(ActivatedRoute)
  route=inject(Router)
  email:any;
  password:any;
  rol:any;
  nombre:any;
  id:any

  ngOnInit(){
   this.ruta.params.subscribe(p=>{
    this.servicio.getUserID(p[`idUser`]).subscribe(r=>{
      this.email=r.email
      this.password=r.password
      this.rol=r.rol;
      this.nombre=r.nombre
      this.id=r.id
    })
   })
  }

  actualizar(formulario:any){
    this.servicio.putUser(formulario.value).subscribe()
    this.route.navigateByUrl('gestion')
  }
}
