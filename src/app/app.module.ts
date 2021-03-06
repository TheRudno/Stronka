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
import { OfferComponent } from './offer/offer.component';
import { HousingComponent } from './offer/housing/housing.component';
import { LightboxModule } from 'ngx-lightbox';
import { InsideComponent } from './offer/housing/inside/inside.component';
import { OutsideComponent } from './offer/housing/outside/outside.component';
import { FeedthroughComponent } from './offer/feedthrough/feedthrough.component';
import { TransformerComponent } from './offer/transformer/transformer.component';
import { SpecialComponent } from './offer/housing/special/special.component';
import { SwitchgearComponent } from './offer/switchgear/switchgear.component';
import { SidebarOfferComponent } from './offer/sidebar-offer/sidebar-offer.component';
import { DropdownOnClickDirective } from './directives/dropdown/dropdown-on-click.directive';


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
    ProductionComponent,
    OfferComponent,
    HousingComponent,
    InsideComponent,
    OutsideComponent,
    FeedthroughComponent,
    TransformerComponent,
    SpecialComponent,
    SwitchgearComponent,
    SidebarOfferComponent,
    DropdownOnClickDirective,
  ],
  imports: [
    LightboxModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
