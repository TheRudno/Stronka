import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pl/contact/contact.component';
import { HomeComponent } from './pl/home/home.component';
import { AboutComponent } from './pl/about/about.component';
import { RealizationsComponent } from './pl/realizations/realizations.component';
import { OfferComponent } from './pl/offer/offer.component';
import { HousingComponent } from './pl/offer/housing/housing.component';
import { InsideComponent } from './pl/offer/housing/inside/inside.component';
import { OutsideComponent } from './pl/offer/housing/outside/outside.component';
import { SpecialComponent } from './pl/offer/housing/special/special.component';
import { FeedthroughComponent } from './pl/offer/feedthrough/feedthrough.component';
import { TransformerComponent } from './pl/offer/transformer/transformer.component';
import { SwitchgearComponent } from './pl/offer/switchgear/switchgear.component';
import { PlComponent } from './pl/pl.component';
import { HomeCzComponent } from './cz/home-cz/home-cz.component';
import { CzComponent } from './cz/cz.component';
import { AboutCzComponent } from './cz/about-cz/about-cz.component';
import { RealizationsCzComponent } from './cz/realizations-cz/realizations-cz.component';
import { ContactCzComponent } from './cz/contact-cz/contact-cz.component';
import { OfferCzComponent } from './cz/offer-cz/offer-cz.component';
import { HousingCzComponent } from './cz/offer-cz/housing-cz/housing-cz.component';
import { InsideCzComponent } from './cz/offer-cz/housing-cz/inside-cz/inside-cz.component';
import { OutsideCzComponent } from './cz/offer-cz/housing-cz/outside-cz/outside-cz.component';
import { SpecialCzComponent } from './cz/offer-cz/housing-cz/special-cz/special-cz.component';
import { TransformerCzComponent } from './cz/offer-cz/transformer-cz/transformer-cz.component';
import { SwitchgearCzComponent } from './cz/offer-cz/switchgear-cz/switchgear-cz.component';
import { FeedthroughCzComponent } from './cz/offer-cz/feedthrough-cz/feedthrough-cz.component';
import { EnComponent } from './en/en.component';
import { HomeEnComponent } from './en/home-en/home-en.component';
import { AboutEnComponent } from './en/about-en/about-en.component';
import { RealizationsEnComponent } from './en/realizations-en/realizations-en.component';
import { ContactEnComponent } from './en/contact-en/contact-en.component';
import { OfferEnComponent } from './en/offer-en/offer-en.component';
import { HousingEnComponent } from './en/offer-en/housing-en/housing-en.component';
import { InsideEnComponent } from './en/offer-en/housing-en/inside-en/inside-en.component';
import { OutsideEnComponent } from './en/offer-en/housing-en/outside-en/outside-en.component';
import { SpecialEnComponent } from './en/offer-en/housing-en/special-en/special-en.component';
import { TransformerEnComponent } from './en/offer-en/transformer-en/transformer-en.component';
import { SwitchgearEnComponent } from './en/offer-en/switchgear-en/switchgear-en.component';
import { FeedthroughEnComponent } from './en/offer-en/feedthrough-en/feedthrough-en.component';


const routes: Routes = [
  {path: 'pl', component: PlComponent, data: {title: 'Armes - Home'}, children: [
      {path: 'home', component: HomeComponent, data: {title: 'Armes - Home'}},
      {path: 'about', component: AboutComponent, data: {title: 'O nas'}},
      {path: 'realizations', component: RealizationsComponent, data: {title: 'Realizacje'}},
      {path: 'contact', component: ContactComponent, data: {title: 'Kontakt'}},
      {path: 'offer', component: OfferComponent, data: {title: 'Oferta'},  children: [
          {path: 'housing', component: HousingComponent, data: {title: 'Obudowy stacji transformatorowych'}, children: [
              {path: 'inside', component: InsideComponent, data: {title: 'Obudowy stacji z obsługą wewnętrzną'}},
              {path: 'outside', component: OutsideComponent, data: {title: 'Obudowy stacji z obsługą zewnętrzną'}},
              {path: 'special', component: SpecialComponent, data: {title: 'Specjalne obudowy stacji'}}
            ]},
          {path: 'transformer', component: TransformerComponent, data: {title: 'Transformatory'}},
          {path: 'switchgear', component: SwitchgearComponent, data: {title: 'Rozdzielnice'}},
          {path: 'feedthrough', component: FeedthroughComponent, data: {title: 'Przepusty i uszczelnienia Hauff Technik'}},
        ]}
    ]},
  {path: 'cz', component: CzComponent, data: {title: 'Armes - Home'}, children: [
      {path: 'home', component: HomeCzComponent, data: {title: 'Armes - Home'}},
      {path: 'about', component: AboutCzComponent, data: {title: 'O nás'}},
      {path: 'realizations', component: RealizationsCzComponent, data: {title: 'Realizace'}},
      {path: 'contact', component: ContactCzComponent, data: {title: 'Kontakty'}},
      {path: 'offer', component: OfferCzComponent, data: {title: 'Nabídka'},  children: [
          {path: 'housing', component: HousingCzComponent, data: {title: 'Skelety pro stanice'}, children: [
              {path: 'inside', component: InsideCzComponent, data: {title: 'Skelety pro stanice s vnitřní obsluhou'}},
              {path: 'outside', component: OutsideCzComponent, data: {title: 'Skelety pro stanice s vnější obsluhou'}},
              {path: 'special', component: SpecialCzComponent, data: {title: 'Skelety pro stanice atypické'}}
            ]},
          {path: 'transformer', component: TransformerCzComponent, data: {title: 'Transformátory'}},
          {path: 'switchgear', component: SwitchgearCzComponent, data: {title: 'Rozvaděče'}},
          {path: 'feedthrough', component: FeedthroughCzComponent, data: {title: 'Průchodky'}},
        ]}
    ]},
  {path: 'en', component: EnComponent, data: {title: 'Armes - Home'}, children: [
      {path: 'home', component: HomeEnComponent, data: {title: 'Armes - Home'}},
      {path: 'about', component: AboutEnComponent, data: {title: 'About'}},
      {path: 'realizations', component: RealizationsEnComponent, data: {title: 'Realizations'}},
      {path: 'contact', component: ContactEnComponent, data: {title: 'Contact'}},
      {path: 'offer', component: OfferEnComponent, data: {title: 'Offer'},  children: [
          {path: 'housing', component: HousingEnComponent, data: {title: 'Transformer Housing'}, children: [
              {path: 'inside', component: InsideEnComponent, data: {title: 'Internal service  transformer housing'}},
              {path: 'outside', component: OutsideEnComponent, data: {title: 'External service transformer housing'}},
              {path: 'special', component: SpecialEnComponent, data: {title: 'Atypical transformer housing'}}
            ]},
          {path: 'transformer', component: TransformerEnComponent, data: {title: 'Transformers'}},
          {path: 'switchgear', component: SwitchgearEnComponent, data: {title: 'Switchgears'}},
          {path: 'feedthrough', component: FeedthroughEnComponent, data: {title: 'Hauff Technik sealing system'}},
        ]}
    ]},
  {path: '', redirectTo: 'pl/home', pathMatch: 'full'},
  {path: '**', redirectTo: 'pl/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
