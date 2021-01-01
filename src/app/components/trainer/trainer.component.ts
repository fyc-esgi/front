import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Trainer} from '../../models/trainer';
import {TrainerService} from '../../services/trainer.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {TrainerFormComponent} from '../dialogs/trainer-form/trainer-form.component';
import {MatDialog} from '@angular/material/dialog';
import {TrainerDeleteComponent} from '../dialogs/trainer-delete/trainer-delete.component';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit, AfterViewInit {

  trainers: Array<Trainer> | null = [];
  displayedColumns: Array<string> | null = ['name', 'title', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainerService: TrainerService,
              public dialog: MatDialog) {
  }

  ngAfterViewInit(): void{
    this.loadData();
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if ( this.dataSource != null){
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if ( this.dataSource.paginator != null ){
        this.dataSource.paginator.firstPage();
      }
    }
  }

  loadData(): void{
    this.trainerService.getAllTrainers().subscribe(data => {
      if (data.body != null && data.body){
        this.trainers = data.body;
        this.dataSource = new MatTableDataSource(this.trainers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  addTrainer(): void{
    const dialogRef = this.dialog.open(TrainerFormComponent, {
      width: '500px',
      data: {name: '', title: '', pokemons: []}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.trainerService.addTrainer(result).subscribe(httpReturn => {
        this.loadData();
      });
    });
  }

  updateTrainer(trainer: Trainer): void{
    const dialogRef = this.dialog.open(TrainerFormComponent, {
      width: '500px',
      data: trainer
    });

    dialogRef.afterClosed().subscribe(result => {
      this.trainerService.updateTrainer(result).subscribe(httpReturn => {
        this.loadData();
      });
    });
  }

  deleteTrainer(trainer: Trainer): void{
    const dialogRef = this.dialog.open(TrainerDeleteComponent, {
      data: trainer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.trainerService.deleteTrainer(trainer).subscribe(httpReturn => {
          this.loadData();
        });
      }
    });
  }
}
