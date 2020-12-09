import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './component/body/body.component';
import {PokemonComponent} from './component/pokemon/pokemon.component';
import {TrainerComponent} from './component/trainer/trainer.component';

const routes: Routes = [
  {
    path : 'trainer',
    component : TrainerComponent,
    pathMatch: 'full'
  },
  {
    path : '**',
    component : PokemonComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
