import { Component, Input, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

import { Article } from "../../models/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  public servidor: string = environment.server;

  constructor() { }

  ngOnInit(): void {
  }

}
