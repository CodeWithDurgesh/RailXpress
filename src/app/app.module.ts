import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelMenu } from 'primeng/panelmenu';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardHomeComponent } from './admin/pages/dashboard-home/dashboard-home.component';
import { ListTrainsComponent } from './admin/pages/list-trains/list-trains.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    DashboardHomeComponent,
    ListTrainsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, PanelMenu],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
