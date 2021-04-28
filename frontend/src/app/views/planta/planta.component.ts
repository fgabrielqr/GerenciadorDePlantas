import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Plantas',
      icon: 'storefront',
      routeUrl: '/plants'
    }
  }

  ngOnInit(): void {
  }

  navigateToPlantCreate(): void {
    this.router.navigate(['/plants/create'])
  }

}
