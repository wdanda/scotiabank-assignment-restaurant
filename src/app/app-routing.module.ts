import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }        from './components/home/home.component'
import { AboutComponent }       from './components/about/about.component'
import { MenuComponent }        from './components/menu/menu.component'

const routes: Routes = [
  {
    path: '',
    children: [
    	{ path: '', redirectTo: '/home', pathMatch: 'full' },
    	{ path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    	{ path: 'menu/:type', component: MenuComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
