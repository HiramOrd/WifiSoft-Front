import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PacksComponent } from './components/packs/packs.component';

import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, HeroComponent, PacksComponent],
  imports: [
    CommonModule,

    // NgPrime
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
  ],
})
export class HomeModule {}
