import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { GamingComponent } from './gaming/gaming.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    GamingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
