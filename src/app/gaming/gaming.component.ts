import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isHidden: boolean = true;
  public titleLabel: string = "Gaming";
  public activeGame: string = "overwatch";

  public toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  public showGame(gameToShow) {
    this.activeGame = gameToShow;
  }

}
