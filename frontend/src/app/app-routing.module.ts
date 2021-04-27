import { PlantaUpdateComponent } from './components/planta/planta-update/planta-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './views/home/home.component';
import { PlantaComponent} from './views/planta/planta.component';
import { PlantaCreateComponent } from './components/planta/planta-create/planta-create.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
  path: "plantas",
  component: PlantaComponent
  },
  {
    path: "planta/create",
    component: PlantaCreateComponent
  },
  {
    path: "plantas/update/:id",
    component: PlantaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
