import { Component } from '@angular/core';
import { TablaOrdenComponent } from '../../components/tabla-orden/tabla-orden.component';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [TablaOrdenComponent],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

}
