import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

  createArticulo(article){
    let params = JSON.stringify(article)
    const headers = this.getHeadersGeneral();

    return this.http.post(`${environment.server}/save`, params, { headers });
  }

  updateArticle(id: string, article: any){
    let params = JSON.stringify(article)
    const headers = this.getHeadersGeneral();
    return this.http.put(`${environment.server}/article/${id}`, params, { headers });
  }

  deleteArticle(id: string){
    const headers = this.getHeadersGeneral();
    return this.http.delete(`${environment.server}/article/${id}`, { headers });
  }


  private getHeadersGeneral() {
    let headersG = new HttpHeaders({
      'Content-Type':  'application/json'
    });

    return headersG;
  }
}
