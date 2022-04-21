import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component1 } from 'src/Components/Components';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DisplayChildComponent } from './display-child/display-child.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { ComponentParentComponent } from './component-parent/component-parent.component';
import { ComponentChildComponent } from './component-child/component-child.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    ParentComponentComponent,
    DisplayChildComponent,
    DisplayComponentComponent,
    ComponentParentComponent,
    ComponentChildComponent,
    WarehouseComponent,
    StoreComponent,
  
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
