import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from "../../services/article/article.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public servidor: string = environment.server;

  constructor( private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( resp => {
      if(resp['status'] == 'success'){
        this.articles = resp['articles'];
      }else{
        console.log("Error al consultar data")
      }
    }, err =>{
      console.log(err);
    });
  }

}
