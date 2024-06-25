import { Component, inject } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-orden',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-orden.component.html',
  styleUrl: './tabla-orden.component.css'
})
export class TablaOrdenComponent {
  servicio=inject(OrdenService)
  ordenes:any
  mesa=0;
  total=0;

  ngOnInit() {
    this.servicio.getOrdenes().subscribe(p=>{
      this.ordenes=p
    })
  }

  calcularTotal(){
    this.total=0
    this.ordenes.forEach((element: { mesa: number; precio: number; }) => {
      if(this.mesa!=0){
        if(this.mesa==element.mesa){
          this.total=this.total+element.precio
        }
      }
    });
  }
}
