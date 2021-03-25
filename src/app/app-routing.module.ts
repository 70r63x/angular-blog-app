import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { BlogComponent } from './pages/blog/blog.component';
import { Error404Component } from './pages/error404/error404.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: ArticleDetailComponent },
  { path: 'search/:id', component: SearchPageComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'pagina', component: PaginaComponent },
  
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
