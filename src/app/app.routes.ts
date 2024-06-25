import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistraOrdenComponent } from './pages/registra-orden/registra-orden.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { RegistraUsuarioComponent } from './pages/registra-usuario/registra-usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { meseroGuard, privilegiosGuard } from './guards/privilegios.guard';
import { EditarOrdenComponent } from './pages/editar-orden/editar-orden.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'regOrden', component:RegistraOrdenComponent,canActivate:[meseroGuard]},
    {path:'orden', component:OrdenesComponent, canActivate:[meseroGuard]},
    {path:'gestion', component:GestionUsuariosComponent, canActivate:[privilegiosGuard]},
    {path:'regUsuario', component:RegistraUsuarioComponent, canActivate:[privilegiosGuard]},
    {path:'editarOrden/:idOrden', component:EditarOrdenComponent},
    {path:'editarUsuario/:idUser', component:EditarUsuarioComponent},

    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', component:Error404Component},

];
