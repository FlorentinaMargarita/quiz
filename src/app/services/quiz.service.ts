import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/javascript.json', name: 'ROCK MY SOUL' },
      // { id: 'data/aspnet.json', name: 'SchauspielerInnen' },
      // { id: 'data/csharp.json', name: '70er Quiz: Mode' },
      // { id: 'data/designPatterns.json', name: '70er Quiz: Songs' }
    ];
  }

}
