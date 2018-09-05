import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isHidden: boolean = true;
  public titleLabel: string = "Technical Skills";
  public skills: Array<Skill> = [
    new Skill("Javascript", ["Vanilla.js", "AngularJS", "Angular", "Node"]),
    new Skill("HTML", ["HTML5", "Accessibility"]),
    new Skill("CSS", ["SCSS", "Bootstrap", "Responsive Design"]),
    new Skill("Ruby", ["Scripting", "Web Automation"]),
    new Skill("Alexa", ["Amazon Alexa Node SDK"]),
    new Skill("Java", ["Java 7", "Java 8", "Spring"]),
    new Skill("APIs", ["RESTful Design", "Development", "Consumption"]),
    new Skill("UML", ["Class Diagrams", "Swimlanes", "Sequence Diagrams"])
  ];

  public toggleHidden() {
    this.isHidden = !this.isHidden;
  }

}
