import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../../services/article/article.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from 'src/app/models/article';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers: [ArticleService]
})
export class ArticleDetailComponent implements OnInit {

  public dataArticle: Article;
  public servidor: string = environment.server;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      let id = params['id'];
      this.articleService.getArticle(id).subscribe( resp => {
        console.log(resp)
        if(resp['article']){
          console.log(resp);
          this.dataArticle = resp['article'];
        }else{
          console.log("Error al consultar data");
          this.router.navigate(['']);
        }
      }, err =>{
        console.log(err);
        this.router.navigate(['']);
      });
    });
  }

  deletArticle(idArticle: string){
    console.log("entre");
    this.articleService.deleteArticle(idArticle).subscribe( resp => {
      console.log(resp)
      if(resp){
        console.log(resp);
        this.router.navigate(['/blog']);
      }else{
        console.log("Error al consultar data");
      }
    }, err =>{
      console.log(err);
      this.router.navigate(['']);
    });
  }

  

}
