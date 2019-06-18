import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './common/slider/slider.component';
import { HeaderComponent } from './pl/header/header.component';
import { CustomDropdownDirective } from './directives/dropdown/custom-dropdown.directive';
import { FooterComponent } from './common/footer/footer.component';
import { ContactComponent } from './pl/contact/contact.component';
import { HeaderFooterComponent } from './common/header-footer/header-footer.component';
import { HomeComponent } from './pl/home/home.component';
import { AboutComponent } from './pl/about/about.component';
import { RealizationsComponent } from './pl/realizations/realizations.component';
import { OurServicesComponent } from './pl/home/our-services/our-services.component';
import { ProductionComponent } from './common/production/production.component';
import { OfferComponent } from './pl/offer/offer.component';
import { HousingComponent } from './pl/offer/housing/housing.component';
import { LightboxModule } from 'ngx-lightbox';
import { InsideComponent } from './pl/offer/housing/inside/inside.component';
import { OutsideComponent } from './pl/offer/housing/outside/outside.component';
import { FeedthroughComponent } from './pl/offer/feedthrough/feedthrough.component';
import { TransformerComponent } from './pl/offer/transformer/transformer.component';
import { SpecialComponent } from './pl/offer/housing/special/special.component';
import { SwitchgearComponent } from './pl/offer/switchgear/switchgear.component';
import { SidebarOfferComponent } from './pl/offer/sidebar-offer/sidebar-offer.component';
import { DropdownOnClickDirective } from './directives/dropdown/dropdown-on-click.directive';
import { PlComponent } from './pl/pl.component';
import { CzComponent } from './cz/cz.component';
import { AboutCzComponent } from './cz/about-cz/about-cz.component';
import { ContactCzComponent } from './cz/contact-cz/contact-cz.component';
import { HeaderCzComponent } from './cz/header-cz/header-cz.component';
import { HomeCzComponent } from './cz/home-cz/home-cz.component';
import { OfferCzComponent } from './cz/offer-cz/offer-cz.component';
import { RealizationsCzComponent } from './cz/realizations-cz/realizations-cz.component';
import { OurServicesCzComponent } from './cz/home-cz/our-services-cz/our-services-cz.component';
import { HousingCzComponent } from './cz/offer-cz/housing-cz/housing-cz.component';
import { SiedebarOfferCzComponent } from './cz/offer-cz/siedebar-offer-cz/siedebar-offer-cz.component';
import { SwitchgearCzComponent } from './cz/offer-cz/switchgear-cz/switchgear-cz.component';
import { TransformerCzComponent } from './cz/offer-cz/transformer-cz/transformer-cz.component';
import { InsideCzComponent } from './cz/offer-cz/housing-cz/inside-cz/inside-cz.component';
import { OutsideCzComponent } from './cz/offer-cz/housing-cz/outside-cz/outside-cz.component';
import { SpecialCzComponent } from './cz/offer-cz/housing-cz/special-cz/special-cz.component';
import { FeedthroughCzComponent } from './cz/offer-cz/feedthrough-cz/feedthrough-cz.component';
import { EnComponent } from './en/en.component';
import { AboutEnComponent } from './en/about-en/about-en.component';
import { ContactEnComponent } from './en/contact-en/contact-en.component';
import { HeaderEnComponent } from './en/header-en/header-en.component';
import { HomeEnComponent } from './en/home-en/home-en.component';
import { OfferEnComponent } from './en/offer-en/offer-en.component';
import { RealizationsEnComponent } from './en/realizations-en/realizations-en.component';
import { OurServicesEnComponent } from './en/home-en/our-services-en/our-services-en.component';
import { HousingEnComponent } from './en/offer-en/housing-en/housing-en.component';
import { SiedebarOfferEnComponent } from './en/offer-en/siedebar-offer-en/siedebar-offer-en.component';
import { SwitchgearEnComponent } from './en/offer-en/switchgear-en/switchgear-en.component';
import { TransformerEnComponent } from './en/offer-en/transformer-en/transformer-en.component';
import { InsideEnComponent } from './en/offer-en/housing-en/inside-en/inside-en.component';
import { OutsideEnComponent } from './en/offer-en/housing-en/outside-en/outside-en.component';
import { SpecialEnComponent } from './en/offer-en/housing-en/special-en/special-en.component';
import { FeedthroughEnComponent } from './en/offer-en/feedthrough-en/feedthrough-en.component';


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
    PlComponent,
    CzComponent,
    AboutCzComponent,
    ContactCzComponent,
    HeaderCzComponent,
    HomeCzComponent,
    OfferCzComponent,
    RealizationsCzComponent,
    OurServicesCzComponent,
    HousingCzComponent,
    SiedebarOfferCzComponent,
    SwitchgearCzComponent,
    TransformerCzComponent,
    InsideCzComponent,
    OutsideCzComponent,
    SpecialCzComponent,
    FeedthroughCzComponent,


    EnComponent,
    AboutEnComponent,
    ContactEnComponent,
    HeaderEnComponent,
    HomeEnComponent,
    OfferEnComponent,
    RealizationsEnComponent,
    OurServicesEnComponent,
    HousingEnComponent,
    SiedebarOfferEnComponent,
    SwitchgearEnComponent,
    TransformerEnComponent,
    InsideEnComponent,
    OutsideEnComponent,
    SpecialEnComponent,
    FeedthroughEnComponent,
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
