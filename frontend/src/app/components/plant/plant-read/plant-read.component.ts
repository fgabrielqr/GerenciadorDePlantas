import { PlantService } from '../plant.service';
import { Plant } from '../plant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-read',
  templateUrl: './plant-read.component.html',
  styleUrls: ['./plant-read.component.css']
})
export class PlantReadComponent implements OnInit {

  plants: Plant[]
  displayedColumns = ['id', 'name', 'alert', 'action']
  
  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.read().subscribe(plants => {
      this.plants = plants
    })
  }

}
