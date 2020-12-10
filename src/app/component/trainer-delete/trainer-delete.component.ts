import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Pokemon} from '../../model/pokemon';

@Component({
  selector: 'app-trainer-delete',
  templateUrl: './trainer-delete.component.html',
  styleUrls: ['./trainer-delete.component.scss']
})
export class TrainerDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrainerDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Pokemon) { }

  ngOnInit(): void {
  }

}
