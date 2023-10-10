import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})

export class CabeceraComponent {
  @Input() title: string = ' ';

  public menuItems: any[] = [
    {
      path: '/Inicio',
      text: 'Inicio',
      active: false,
    },
    {
      path: '/Info',
      text: 'Info',
      active: false,
    },
    {
      path: '/Buscar',
      text: 'Buscar',
      active: false,
    },
    {
      path: '/Galeria',
      text: 'Galeria',
      active: false,
    }
  ];

  public admin: boolean = false;

  public menuAdmin: any = {
    path: '/admin',
    text: 'Administracion',
    active: false,
  };

  ngOnInit(): void {
    this.menuItems.forEach((item) => (item.active = item.text == this.title));
    console.log(this.menuItems);
  }
}
