import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.css']
})
export class PlantCreateComponent implements OnInit {

  plant: Plant = {
    name: '',
    alert: '',
  }

  constructor(private plantService: PlantService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createPlant(): void {
    this.plantService.create(this.plant).subscribe(() => {
      this.plantService.showMessage('Planta criado!')
      this.router.navigate(['/plants'])
    })

  }

  cancel(): void {
    this.router.navigate(['/plants'])
  }
}
