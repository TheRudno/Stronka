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


const routes: Routes = [
  {path: 'pl', component: PlComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'realizations', component: RealizationsComponent},
    {path: 'contact', component: ContactComponent },
    {path: 'offer', component: OfferComponent, children: [
        {path: 'housing', component: HousingComponent, children: [
            {path: 'inside', component: InsideComponent},
            {path: 'outside', component: OutsideComponent},
            {path: 'special', component: SpecialComponent}
          ]},
        {path: 'feedthrough', component: FeedthroughComponent},
        {path: 'transformer', component: TransformerComponent},
        {path: 'switchgear', component: SwitchgearComponent}
      ]}
    ]},
  {path: 'cz', component: CzComponent, children: [
      {path: 'home', component: HomeCzComponent},
      {path: 'about', component: AboutCzComponent},
      {path: 'realizations', component: RealizationsCzComponent},
      {path: 'contact', component: ContactCzComponent },
      {path: 'offer', component: OfferCzComponent, children: [
          {path: 'housing', component: HousingCzComponent, children: [
              {path: 'inside', component: InsideCzComponent},
              {path: 'outside', component: OutsideCzComponent},
              {path: 'special', component: SpecialCzComponent}
            ]},
          {path: 'transformer', component: TransformerCzComponent},
          {path: 'switchgear', component: SwitchgearCzComponent},
          {path: 'feedthrough', component: FeedthroughCzComponent},
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
