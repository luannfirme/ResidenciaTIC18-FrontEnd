import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})

export class NoticiasComponent implements OnInit {
  noticias: any[] = [];

  constructor() { }

  ngOnInit() {
    this.obterNoticias();
  }

  async obterNoticias() {
    try {
      const resposta = await fetch('https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=e10349f1a5334964a73e16a7740b669a&q=Universidade Estadual de Santa Cruz&language=pt');
      const noticias = await resposta.json();
      this.noticias = noticias.articles.map((noticia: any) => ({
        titulo: noticia.title,
        link: noticia.url
      }));
    } catch (error) {
      console.error('Erro com a chamada fetch: ', error);
    }
  }
}