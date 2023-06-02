import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Books[] = [];

  constructor() { }

  getAll(): Books[] {
    return this.books;
  }

  getOne(id_libro: number): Books | undefined {
    // return this.books.find( ( book : Books) => book.id_book === id_libro);
    let BookResult = this.books.find( (bookFinded) => (bookFinded.id_book === id_libro));
    if(BookResult === undefined)
    {
      console.log("Error: No ha encontrado el libro")
    }

    return BookResult;

  }

  add(book: Books): void {
    this.books.push(book);
  }

  edit(book: Books): boolean {
    const index = this.books.findIndex(b => b.id_book === book.id_book);
    if (index !== -1) {
      this.books[index] = book;
      return true;
    }
    return false;
  }

  delete(id_book: number): boolean {
    const index = this.books.findIndex(book => book.id_book === id_book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
}
