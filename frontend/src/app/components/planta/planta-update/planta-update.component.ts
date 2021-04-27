import { Planta } from "./../planta.model";
import { Router, ActivatedRoute } from "@angular/router";
import { PlantaService } from "./../planta.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-planta-update',
  templateUrl: './planta-update.component.html',
  styleUrls: ['./planta-update.component.css']
})
export class PlantaUpdateComponent implements OnInit {
  planta: Planta = {
    name: '',
    alert: ''
  }

  constructor(private plantaService: PlantaService, 
    private router: Router, 
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));
      this.plantaService.readById(id).subscribe((planta) => {
        this.planta = planta;
      });
    }
  
    updatePlanta(): void {
      this.plantaService.update(this.planta).subscribe(() => {
        this.plantaService.showMessage("Planta atualizada com sucesso!");
        this.router.navigate(["/plantas"]);
      });
    }
  
    cancel(): void {
      this.router.navigate(["/plantas"]);
    }

}
