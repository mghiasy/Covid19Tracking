import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { CountryWiseSummaryComponent } from './country-wise-summary/country-wise-summary.component';
import { SymptomsComponent } from './symptoms/symptoms.component';


const routes: Routes = [
  {path:'home',component: AppComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'dataCollection',component:DataCollectionComponent},
  {path:'countryWiseSummary',component:CountryWiseSummaryComponent},
  {path:'symptoms',component:SymptomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
