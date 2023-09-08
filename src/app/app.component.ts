import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AAJLI Boujemaa';
  actions : Array<any> = [
    {title:"home","route":"/home",icon:"house"},
    {title:"products","route":"/products",icon:"search"},
    {title:"newProduct","route":"/newProduct",icon:"safe"}
  ]

  currentAction : any;

  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
