import { Plant } from "../plant.model";
import { Router, ActivatedRoute } from "@angular/router";
import { PlantService } from "../plant.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plant-update",
  templateUrl: "./plant-update.component.html",
  styleUrls: ["./plant-update.component.css"],
})
export class PlantUpdateComponent implements OnInit {
  plant: Plant;

  constructor(
    private plantService: PlantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.plantService.readById(id).subscribe((plant) => {
      this.plant = plant;
    });
  }

  updatePlant(): void {
    this.plantService.update(this.plant).subscribe(() => {
      this.plantService.showMessage("Planta atualizado com sucesso!");
      this.router.navigate(["/plants"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/plants"]);
  }
}
