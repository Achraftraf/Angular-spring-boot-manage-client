import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { MenuComponent } from './component1/menu/menu.component';
import { ListeComponent } from './component1/liste/liste.component';
import { FormulairComponent } from './component1/formulair/formulair.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    MenuComponent,
    ListeComponent,
    FormulairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
