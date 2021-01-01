import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonComponent} from './components/pokemon/pokemon.component';
import {TrainerComponent} from './components/trainer/trainer.component';

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
