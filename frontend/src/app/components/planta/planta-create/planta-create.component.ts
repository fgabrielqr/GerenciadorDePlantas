import { Planta } from './../planta.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-create',
  templateUrl: './planta-create.component.html',
  styleUrls: ['./planta-create.component.css']
})
export class PlantaCreateComponent implements OnInit {

  planta: Planta = {
    name: '',
    alert: ''
  }

  constructor(private plantaService: PlantaService, private router: Router) { }

  ngOnInit(): void {
  }

  createPlanta(): void {
    this.plantaService.create(this.planta).subscribe(() => {
      this.plantaService.showMessage('Planta criado!') 
      this.router.navigate(['/plantas'])
    })
       
  }

  cancel(): void {
    this.router.navigate(['/plantas'])
  }

}
