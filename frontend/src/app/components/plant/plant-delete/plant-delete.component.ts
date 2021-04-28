import { Router, ActivatedRoute } from "@angular/router";
import { PlantService } from "../plant.service";
import { Plant } from "../plant.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plant-delete",
  templateUrl: "./plant-delete.component.html",
  styleUrls: ["./plant-delete.component.css"],
})
export class PlantDeleteComponent implements OnInit {
  plant: Plant;

  constructor(
    private plantService: PlantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantService.readById(id).subscribe((plant) => {
      this.plant = plant;
    });
  }

  deletePlant(): void {
    this.plantService.delete(this.plant.id).subscribe(() => {
      this.plantService.showMessage("Planta excluido com sucesso!");
      this.router.navigate(["/plants"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/plants"]);
  }
}
