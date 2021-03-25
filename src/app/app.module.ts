import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './sections/slider/slider.component';
import { SidebarComponent } from './sections/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { BlogComponent } from './pages/blog/blog.component';
import { Error404Component } from './pages/error404/error404.component';
import { ArticlesComponent } from './sections/articles/articles.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    FormularioComponent,
    PaginaComponent,
    BlogComponent,
    Error404Component,
    ArticlesComponent,
    ArticleDetailComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
