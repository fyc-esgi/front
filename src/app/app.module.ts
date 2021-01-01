import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from './material-module';
import { TrainerComponent } from './components/trainer/trainer.component';
import { PokemonFormComponent } from './components/dialogs/pokemon-form/pokemon-form.component';
import { PokemonDeleteComponent } from './components/dialogs/pokemon-delete/pokemon-delete.component';
import { TrainerFormComponent } from './components/dialogs/trainer-form/trainer-form.component';
import { TrainerDeleteComponent } from './components/dialogs/trainer-delete/trainer-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TrainerComponent,
    PokemonFormComponent,
    PokemonDeleteComponent,
    TrainerFormComponent,
    TrainerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
