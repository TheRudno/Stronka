import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { OfferComponent } from './offer/offer.component';
import { HousingComponent } from './offer/housing/housing.component';
import { InsideComponent } from './offer/housing/inside/inside.component';
import { OutsideComponent } from './offer/housing/outside/outside.component';
import { SpecialComponent } from './offer/housing/special/special.component';
import { FeedthroughComponent } from './offer/feedthrough/feedthrough.component';
import { TransformerComponent } from './offer/transformer/transformer.component';
import { SwitchgearComponent } from './offer/switchgear/switchgear.component';


const routes: Routes = [
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
    ]},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
