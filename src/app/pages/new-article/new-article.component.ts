import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article/article.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  public article: Article;
  public servidor: string = environment.server;
  public titulo: string = "Crear articulo"
  public isEdit: boolean;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "50",
    uploadAPI:  {
      url: this.servidor+'/upload-image/',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Seleccionar imagen del articulo',
      resetBtn: 'Limpiar',
      uploadBtn: 'Cargar',
      attachPinBtn: 'Seleccionar imagen del articulo',
      afterUploadMsg_success: 'Cargado con exito !',
      afterUploadMsg_error: 'Error al cargar !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) {
    this.article = new Article('', '', '', null, null);
  }

  ngOnInit(): void {
  }

  sendForm(form: NgForm){
    this.articleService.createArticulo(this.article).subscribe( resp => {
      console.log(resp);
      if(resp['status'] == 'success'){
        this.article = resp['article'];
        this.router.navigate(['/blog']);
      }else{
        console.log("Error al consultar data")
      }
    }, err =>{
      console.log(err);
    });
  }

  DocUpload(data: any){
    console.log(data);
    let image_data = data['body'];
    this.article.image = image_data.image;
  }

}
