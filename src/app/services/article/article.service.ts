import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Article } from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(last: any = null){

    var articles = 'articles';
    if(last != null){
      articles = 'articles/true'
    }

    return this.http.get(`${environment.server}/${articles}`);
  }

  getArticle(articleId: string){
    return this.http.get(`${environment.server}/article/${articleId}`);
  }

  search(busqueda: string){
    return this.http.get(`${environment.server}/search/${busqueda}`);
  }
}
