import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './home/slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { CustomDropdownDirective } from './directives/dropdown/custom-dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderFooterComponent } from './header/header-footer/header-footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { ProductionComponent } from './home/production/production.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    CustomDropdownDirective,
    FooterComponent,
    ContactComponent,
    HeaderFooterComponent,
    HomeComponent,
    AboutComponent,
    RealizationsComponent,
    OurServicesComponent,
    ProductionComponent
  ],
  imports: [
    AppRoutingModule,
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
