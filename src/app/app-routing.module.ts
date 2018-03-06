import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';

//ähr lägger vi till våran routing
//sökvägen till komponent skrivs med ett path:, som har två egenskaper
//när vi lade till den, home works! home.component.html som körs
//när man har flera routing kan man skriva / och namnet
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'status', component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
