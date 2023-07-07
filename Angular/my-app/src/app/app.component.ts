import { Component } from '@angular/core';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}
// ngFror
interface details {
  id: number,
  name: string,
  type: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "apple"
  pokemonName: string = "";
  pokemons: Pokemon[] = [{
    id:1,
    name: "pikachu",
    type: 'electric',
    isCool: false,
    isStylish: false
  },{
    id:2,
    name: "squirtle",
    type: "water",
    isCool:true,
    isStylish: false

  },{
    id:3,
    name: "charmander",
    type: 'fire',
    isCool: true,
    isStylish: true
  }]

  constructor(){

  }
  handleChange(event: any){
    this.pokemonName = event?.target.value;
  }
  //ngFor
  detail: details[]=[{
    id: 1,
    name: 'sonam',
    type: 'teacher'
  },{
    id: 1,
    name: 'ugyen',
    type: 'teacher'
  },{
    id: 1,
    name: 'kelzang',
    type: 'teacher'
  }]
}
