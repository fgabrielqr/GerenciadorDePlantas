import { PlantDeleteComponent } from './components/plant/plant-delete/plant-delete.component';
import { PlantUpdateComponent } from './components/plant/plant-update/plant-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { PlantaComponent } from "./views/planta/planta.component";
import { PlantCreateComponent } from './components/plant/plant-create/plant-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "plants",
    component: PlantaComponent
  },
  {
    path: "plants/create",
    component: PlantCreateComponent
  },
  {
    path: "plants/update/:id",
    component: PlantUpdateComponent
  },
  {
    path: "plants/delete/:id",
    component: PlantDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
