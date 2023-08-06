import { RouterModule, Routes } from '@angular/router';

import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component: DetailsComponent},
  {path: 'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


