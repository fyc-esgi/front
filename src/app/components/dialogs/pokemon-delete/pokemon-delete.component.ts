import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Pokemon} from '../../../models/pokemon';

@Component({
  selector: 'app-pokemon-delete',
  templateUrl: './pokemon-delete.component.html',
  styleUrls: ['./pokemon-delete.component.scss']
})
export class PokemonDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PokemonDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Pokemon) { }

  ngOnInit(): void {
  }

}
