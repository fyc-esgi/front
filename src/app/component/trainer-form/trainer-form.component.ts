import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Pokemon} from '../../model/pokemon';
import {Trainer} from '../../model/trainer';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.scss']
})
export class TrainerFormComponent implements OnInit, AfterViewInit {
  isCreate = false;

  constructor(public dialogRef: MatDialogRef<TrainerFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Trainer) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    if (this.data.name === ''){
      this.isCreate = true;
    }
  }

}
