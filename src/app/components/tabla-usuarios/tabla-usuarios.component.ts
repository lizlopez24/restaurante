import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css'
})
export class TablaUsuariosComponent {
  servicio=inject(LoginService)
  usuarios:any;
  ngOnInit(): void {
    this.servicio.getUsers().subscribe(p=>{
      this.usuarios=p
    })
  }

  eliminar(id:any){
    this.servicio.delete(id).subscribe();
  }

}
