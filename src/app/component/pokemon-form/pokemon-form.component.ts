import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Pokemon} from '../../model/pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent  implements OnInit, AfterViewInit {
  isCreate = false;
  pokemonTypes = ['Normal', 'Water', 'Electric', 'Fighting', 'Ground', 'Psychic', 'Rock', 'Dark', 'Steel', 'Fire', 'Grass', 'Ice', 'Poison', 'Flying', 'Bug', 'Ghost', 'Dragon', 'Fairy'];
  constructor(
    public dialogRef: MatDialogRef<PokemonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    if (this.data.name === ''){
      this.isCreate = true;
    }
  }

  ngOnInit(): void {
  }
}
