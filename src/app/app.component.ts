import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  incrementLike: number = 0;
  counter = 0;


  constructor(private newsapi: NewsApiService) { }

  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  increaseCount() {
    this.incrementLike = this.counter++;
  }

}
