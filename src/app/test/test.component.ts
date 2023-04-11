import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}} !
  </h2>
  <h3>
    {{2+2}} 
  </h3>
  <h3>
    {{"add "+"strings "+"together with interpolation"}}
  </h3>
  <h4>
    {{'Hello ' + name}}
  </h4>
  <h2>
    {{name.length}}
  </h2>
  <h2>
    {{name.toUpperCase()}}
  </h2>
  <h2>
    {{greetUser()}}
  </h2>
  `,
  styles: []
})
export class TestComponent implements OnInit{

    public name = "Amruta";
    constructor () { }

    ngOnInit(): void {        
    }

    greetUser(){
      return "hi " + this.name;
    }
}
