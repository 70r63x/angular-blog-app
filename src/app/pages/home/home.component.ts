import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public articles: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles(true).subscribe( resp => {
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
