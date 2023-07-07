import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DierectiveExampleComponent } from './dierective-example/dierective-example.component';
import { FontSizeDirective } from './font-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DierectiveExampleComponent,
    FontSizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
