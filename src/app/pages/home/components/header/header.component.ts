import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Paquetes',
        icon: 'pi pi-fw pi-box',
        items: [
          {
            label: 'Paquete 1',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Paquete 2',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Paquete 3',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Paquete 4',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Nosotros',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Contáctanos',
        icon: 'pi pi-fw pi-id-card'
      }
    ];
  }
}
