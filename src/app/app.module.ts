import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LayoutsModule } from './layouts/layouts.module';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PagesModule, LayoutsModule, RoutesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
