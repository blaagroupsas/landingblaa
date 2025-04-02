import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  // Método para obtener URL completa de assets

  clients = [
    {
      id: 1,
      name: 'Empresa ABC',
      logo: 'images/clients/BLAA-01.png',
      industry: 'Tecnología',
    },
    {
      id: 2,
      name: 'Corporación XYZ',
      logo: 'images/clients/BLAA-02.png',
      industry: 'Finanzas',
    },
    {
      id: 3,
      name: 'Grupo 123',
      logo: 'images/clients/BLAA-03.png',
      industry: 'Salud',
    },
    {
      id: 4,
      name: 'Industrias EFG',
      logo: 'images/clients/BLAA-04.png',
      industry: 'Manufactura',
    },
    {
      id: 5,
      name: 'Servicios HIJ',
      logo: 'images/clients/BLAA-05.png',
      industry: 'Educación',
    },
    {
      id: 6,
      name: 'Consultora KLM',
      logo: 'images/clients/BLAA-06.png',
      industry: 'Consultoría',
    },
    {
      id: 7,
      name: 'Consultora KLM',
      logo: 'images/clients/BLAA-07.png',
      industry: 'Consultoría',
    },
    {
      id: 8,
      name: 'Consultora KLM',
      logo: 'images/clients/BLAA-08.png',
      industry: 'Consultoría',
    },
    {
      id: 9,
      name: 'Consultora KLM',
      logo: 'images/clients/BLAA-09.png',
      industry: 'Consultoría',
    },
    {
      id: 10,
      name: 'Consultora KLM',
      logo: 'images/clients/BLAA-10.png',
      industry: 'Consultoría',
    },
    {
      id: 11,
      name: 'Consultora KLM',
      logo: 'images/clients/BLAA-11.png',
      industry: 'Consultoría',
    },
    {
      id: 12,
      name: 'Consultora KLM',
      logo: 'images/clients/BLAA-12.png',
      industry: 'Consultoría',
    },
  ];

  // Duración de la animación (ajustada según el número de clientes)
  animationDuration = 30;

  ngOnInit() {
    // Ajustar la duración de la animación según la cantidad de logos
    this.animationDuration = Math.max(20, this.clients.length * 4);
  }

  ngOnDestroy() {
    // Limpiar recursos si es necesario
  }
}
