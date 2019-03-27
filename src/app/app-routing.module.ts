import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { OfferComponent } from './offer/offer.component';
import { TransformerComponent } from './offer/transformer/transformer.component';
import { HousingComponent } from './offer/housing/housing.component';
import { InsideComponent } from './offer/housing/inside/inside.component';
import { OutsideComponent } from './offer/housing/outside/outside.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'realizations', component: RealizationsComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'offer', component: OfferComponent, children: [
      {path: 'transformer', component: TransformerComponent},
      {path: 'housing', component: HousingComponent, children: [
          {path: 'inside', component: InsideComponent},
          {path: 'outside', component: OutsideComponent}
        ]}
    ]},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
