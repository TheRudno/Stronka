import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { OfferComponent } from './offer/offer.component';
import { TransformerComponent } from './offer/transformer/transformer.component';
import { HousingComponent } from './offer/housing/housing.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'realizations', component: RealizationsComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'offer', component: OfferComponent, children: [
      {path: 'transformer', component: TransformerComponent},
      {path: 'housing', component: HousingComponent}
    ]},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
