import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from 'src/app/models/article';

import { ArticleService } from "../../services/article/article.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [ArticleService]
})
export class SearchPageComponent implements OnInit {

  public articles: Article[];
  public busqueda: string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.busqueda = params['id'];
      this.articleService.search(this.busqueda).subscribe( resp => {
        console.log(resp);
        if(resp['status'] == 'success'){
          this.articles = resp['articles'];
        }else{
          console.log("Error al consultar data")
          this.articles = [];
        }
      }, err =>{
        console.log(err);
        this.articles = [];
      });
    });
  }

}
