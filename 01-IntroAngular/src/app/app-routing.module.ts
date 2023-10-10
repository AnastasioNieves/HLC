import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { InfoComponent } from './paginas/info/info.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { RouterModule } from '@angular/router';

const rutas: Routes = [
  {
    path: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'Info',
    component: InfoComponent,
  },
  {
    path: 'Buscar',
    component: BuscarComponent,
  },
  {
    path: '**',
    redirectTo: 'Inicio',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
