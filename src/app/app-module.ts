import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ProductsList } from './products-list/products-list';
import { ProductRow } from './product-row/product-row';

@NgModule({
  declarations: [
    App,
    ProductsList,
    ProductRow
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }