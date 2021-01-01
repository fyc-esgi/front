import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {PokemonService} from '../../services/pokemon.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PokemonFormComponent} from '../dialogs/pokemon-form/pokemon-form.component';
import {MatDialog} from '@angular/material/dialog';
import {PokemonDeleteComponent} from '../dialogs/pokemon-delete/pokemon-delete.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, AfterViewInit {

  pokemons: Array<Pokemon> | null = [];
  displayedColumns: Array<string> | null = ['name', 'element_type', 'hp', 'attack', 'defense', 'speed', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pokemonService: PokemonService,
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
    this.pokemonService.getAllPokemons().subscribe(data => {
      if (data.body != null && data.body){
        this.pokemons = data.body;
        this.dataSource = new MatTableDataSource(this.pokemons);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  addPokemon(): void{
    const dialogRef = this.dialog.open(PokemonFormComponent, {
      width: '500px',
      data: {attack: 0, defense: 0, element_type: '', hp: 0, name: '', speed: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pokemonService.addPokemon(result).subscribe(httpReturn => {
        this.loadData();
      });
    });
  }

  updatePokemon(pokemon: Pokemon): void{
    const dialogRef = this.dialog.open(PokemonFormComponent, {
      width: '500px',
      data: pokemon
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null){
        this.pokemonService.updatePokemon(result).subscribe(httpReturn => {
          this.loadData();
        });
      }
    });
  }

  deletePokemon(pokemon: Pokemon): void{
    const dialogRef = this.dialog.open(PokemonDeleteComponent, {
      data: pokemon
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.pokemonService.deletePokemon(pokemon).subscribe(httpReturn => {
          this.loadData();
        });
      }
    });
  }
}
