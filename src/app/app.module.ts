import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocheListComponent } from './components/coche-list/coche-list.component';
import { FormsModule } from '@angular/forms';
import { CochePipe } from './pipes/coche.pipe';
import { CocheDirective } from './directives/coche.directive';

@NgModule({
  declarations: [
    AppComponent,
    CocheListComponent,
    CochePipe,
    CocheDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
