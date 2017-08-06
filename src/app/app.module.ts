import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { HttpModule }        from '@angular/http'

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';

import { NavComponent }      from './components/common/nav/nav.component';
import { HeaderComponent }   from './components/common/header/header.component';
import { FooterComponent }   from './components/common/footer/footer.component';

import { HomeComponent }     from './components/home/home.component';
import { AboutComponent }    from './components/about/about.component';

import { MenuService }       from './services/menu.service';
import { MenuComponent }     from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    
    // Main components/routes
    HomeComponent,
    AboutComponent,
    MenuComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
