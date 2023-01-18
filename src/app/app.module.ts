import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component'
import { HeaderComponent } from './components/header/header.component';
import { PipesPipe } from './utils/pipes.pipe';
import { InputComponent } from './components/shared/input/input.component';
import { OutputComponent } from './components/shared/output/output.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeaderComponent,
    PipesPipe,
    InputComponent,
    OutputComponent,
    ProductListComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
