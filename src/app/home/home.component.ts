import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[];
  selectedBook: string;

  constructor() {
    this.books = [
      { name: 'Book1', author: 'Author1' },
      { name: 'Book2', author: 'Author2' },
      { name: 'Book3', author: 'Author3' },
    ];
  }
  ngOnInit(): void {}
}
