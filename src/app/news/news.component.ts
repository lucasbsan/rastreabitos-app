import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news?: News[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.doNews();
  }

  doNews(): void {
    this.newsService.getAll().subscribe({
      next: (data: News[]) => {
        this.news = data;
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }
}
