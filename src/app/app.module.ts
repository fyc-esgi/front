import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialModule} from './material-module';
import { TrainerComponent } from './component/trainer/trainer.component';
import { PokemonFormComponent } from './component/pokemon-form/pokemon-form.component';
import { PokemonDeleteComponent } from './component/pokemon-delete/pokemon-delete.component';
import { TrainerFormComponent } from './component/trainer-form/trainer-form.component';
import { TrainerDeleteComponent } from './component/trainer-delete/trainer-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
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
