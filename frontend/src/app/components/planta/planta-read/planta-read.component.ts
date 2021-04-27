import { Planta } from './../planta.model';
import { PlantaService } from './../planta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planta-read',
  templateUrl: './planta-read.component.html',
  styleUrls: ['./planta-read.component.css']
})
export class PlantaReadComponent implements OnInit {

  plantas: Planta[] = [];
  displayedColumns = ['id', 'name', 'alert', 'action']

  constructor(private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.plantaService.read().subscribe(plantas => {
      this.plantas = plantas
      console.log(plantas)
    })
  }

}
